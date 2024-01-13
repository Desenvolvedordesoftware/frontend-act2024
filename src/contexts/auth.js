import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import {url} from "../function/FunctionR";

export const AuthContext = createContext({});

var Email = "";
var Password = "";
var Name = "";
var Tokem = "";

export var CodCompany = "";

export const AuthProvider = ({ children }) => {
   const [user, setUser] = useState();

   useEffect(() => {
      const userToken = localStorage.getItem("user_token");
      const usersStorage = localStorage.getItem("users_db");

      if (userToken && usersStorage) {
         const hasUser = JSON.parse(usersStorage)?.filter(
            (user) => user.email === JSON.parse(userToken).email
         );

         if (hasUser) setUser(hasUser[0]);
      }
   }, []);

   function geraStringAleatoria(tamanho) {
      var stringAleatoria = '';
      var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      for (var i = 0; i < tamanho; i++) {
          stringAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
      }
      return stringAleatoria;
   }

   const signin = (email, password) => {
      const handleSubmit = async () => {

         try {
            const res = await axios.get(url+"/users/"+email+"/"+password);

            if (res.data.length === 0) {
               return toast.warn("Falha de Autenticação!");
            } else {
               var lista = [];

               res.data.map((dados) => {
                  lista.push(
                     [(dados.id),

                     ]
                  )
                  Email = dados.email;
                  Password = String(dados.senha);
                  Name = dados.nome;
                  Tokem = dados.token;
                  CodCompany = dados.empresa;

               })

            }
         } catch (error) {
            toast.error(error);
         }

         const usersStorage = JSON.parse(localStorage.getItem("users_db"));

      const hasUser = usersStorage?.filter((user) => user.email === email);

      if (hasUser?.length) {
         return;
      }else{

               if (password === Password) {

                  let newUser;

                  if (usersStorage) {
                     newUser = [...usersStorage, { email, CodCompany }];
                  } else {
                     newUser = [{ email, CodCompany }];
                  }

                  localStorage.setItem("users_db", JSON.stringify(newUser));

                  toast.success("Seja bem vindo" + " " + Name + "!");
                  return;

               } else {
                  localStorage.removeItem("user_token");
                  localStorage.removeItem("users_db");
                  return toast.warn("Erro de Autenticação!");
               };
            }
      };

      handleSubmit();


      if (Email === email && Password === password) {
         const token = geraStringAleatoria(128);
         localStorage.setItem("user_token", JSON.stringify({ token, email }));
         setUser({ email, password });
         return;
      } else {
         return "!";
      };

   };

   const signup = (email, password) => {
      const usersStorage = JSON.parse(localStorage.getItem("users_db"));

      const hasUser = usersStorage?.filter((user) => user.email === email);

      if (hasUser?.length) {
         return "Já tem uma conta com esse E-mail!";
      }

      let newUser;

      if (usersStorage) {
         newUser = [...usersStorage, { email, password }];
      } else {
         newUser = [{ email, password }];
      }

      localStorage.setItem("users_db", JSON.stringify(newUser));

      return;

   };

   const signout = () => {
      setUser(null);
      localStorage.removeItem("user_token");
      localStorage.removeItem("users_db");
   };

   return (
      <AuthContext.Provider
         value={{ user, signed: !!user, signin, signup, signout }}
      >
         {children}
      </AuthContext.Provider>
   );
};