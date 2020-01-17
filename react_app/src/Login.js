import React, {useRef, useState} from "react";
import {BrowserRouter as Router, useLocation} from "react-router-dom";

const testResponse = "<cas:serviceResponse > <cas:authenticationSuccess>   <cas:user>jsylve09</cas:user> </cas:authenticationSuccess> </cas:serviceResponse>"

export default function Login() {
    var [xmlResponse, setXMLResponse] = useState(null)
    var isAuth = useRef(false)
    var isFetchDone = useRef(false)

    function getXMLfile(ticket) {
        var resultat = null;
        if (ticket && xmlResponse == null) {
            fetch('https://auth.martinique.univ-ag.fr/cas/serviceValidate?service=http://dsin.univ-ag.fr/login&ticket=' + ticket
            ).then(result => result.text()).then(result => {
                resultat = result
                setXMLResponse(result)
                isFetchDone.current = true
                return result
            }).then(resultat => {
                if (verifyXMLfile(resultat)) {
                    console.log(xmlResponse)
                }

            })
                .catch(function (error) {
                    console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
                })
        }

    }

    function verifyXMLfile(casResponse) {
        if (casResponse != null) {
            var casResponseHolder = casResponse;
            var verifyAuthentification = casResponseHolder.search("authenticationSuccess")
            if (verifyAuthentification >= 0) {
                var usernameStartingPos = casResponseHolder.search("<cas:user>")
                var usernameEndingPos = casResponseHolder.search("</cas:user>")
                console.log(casResponseHolder.substring(usernameStartingPos + 9, usernameEndingPos))
                isAuth.current = true
                return true;
            }
        }
        console.log("Authentification failed" + casResponse)
        return false
    }

    function Child({ticket}) {

        if (!isAuth.current) {
            console.log(isAuth.current)
            getXMLfile(ticket)
            console.log(isAuth.current)

        }

        return (
            <div>
                {ticket ? (
                    <h3> There is a ticket</h3>
                ) : (
                    <h3>There is no ticket in the query string</h3>
                )}
            </div>
        );
    }

    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }

    function QueryParamsDemo() {
        let query = useQuery();

        return (
            <div>
                <div>

                    <Child ticket={query.get("ticket")}/>
                </div>
            </div>
        );
    }


    return (
        <Router>
            <QueryParamsDemo/>
        </Router>
    );
}



