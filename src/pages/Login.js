import ContentPage from "../components/Content/ContentPage";

const Login = () => {
    return (
        <ContentPage caminho={[{nome: "Login", link: "/login"}]}>
            <p>Conteudo da página aqui</p>
        </ContentPage>
    );
};

export default Login;