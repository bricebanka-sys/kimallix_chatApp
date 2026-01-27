import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";




const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const {setAuthUser} = useAuthContext()
  
  const signup = async ({ fullName, username, password, confirmPassword, gender }) => {
    const success = handleInputErrors({ fullName, username, password, confirmPassword, gender });
    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, username, password, confirmPassword, gender }),
      });

      const data = await res.json();
      if (data.error) throw new Error(data.error);

      // Stockage local pour persistance
      localStorage.setItem("chat-user", JSON.stringify(data));
      // Mise à jour du contexte global
      setAuthUser(data);

    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};


export default useSignup;

function handleInputErrors({fullName, username, password, confirmPassword, gender}){
  if(!fullName || !username || !password || !confirmPassword || !gender){
    toast.error("Bitte füllen Sie alle Felder aus.")
    return false
  }

  if(password !== confirmPassword){
    toast.error("Passwort stimmt nicht überein")
    return false
  }

  if(password.length < 6){
    toast.error("Das Passwort muss mindestens 6 Zeichen lang sein")
    return false
  }
  return true
}