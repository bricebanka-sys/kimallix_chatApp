// frontend/src/context/SocketContext.jsx
import { createContext, useState, useEffect, useContext } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

const SocketContext = createContext();


// eslint-disable-next-line react-refresh/only-export-components
export const useSocketContext = () => {  // revoir ici en cas de Bugg incompréhensible 23:34
  return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
	const [socket, setSocket] = useState(null);
	const [onlineUsers, setOnlineUsers] = useState([]);
	const { authUser } = useAuthContext();

	useEffect(() => {
    let newSocket; // Variable temporaire pour éviter les conflits de rendu

    if (authUser) {
        newSocket = io("http://localhost:5000", {
            query: { userId: authUser._id },
        });

        // On ne met à jour l'état qu'une fois le socket créé
        setSocket(newSocket);

        newSocket.on("getOnlineUsers", (users) => {
            setOnlineUsers(users);
        });

        // NETTOYAGE : Crucial pour arrêter les requêtes en boucle
        return () => {
            newSocket.close();
            setSocket(null);
        };
    } else {
        if (socket) {
            socket.close();
            setSocket(null);
        }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [authUser]);

	return (
		<SocketContext.Provider value={{ socket, onlineUsers }}>
			{children}
		</SocketContext.Provider>
	);
};