import ContentPage from "../components/Content/ContentPage";

const Register = () => {
    return (
        <ContentPage titulo="Cadastro" caminho={[{nome: "Cadastro", link: "/register"}]}>
            <p>Conteudo da página aqui</p>
        </ContentPage>
    );
};

export default Register;