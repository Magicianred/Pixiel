import React from "react";

//Material-UI
import Box from "@material-ui/core/Box";


const OnlinePeople = ({ users }) => {
    return (
        <>
            {
                users ? (
                    <>
                        <h1>Persone attualmente online:</h1>
                        <Box>
                            <h2>
                                {users.map(({nickName}) => (
                                    <div key={nickName} className="activeItem">
                                        {nickName}
                                        <img alt="persona online" src="./images/people.png" />
                                    </div>
                                ))}
                            </h2>
                        </Box>
                        </>
                )
                    : null
            }
            </>
    )
}

export default OnlinePeople;