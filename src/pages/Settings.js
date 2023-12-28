import ContentPage from "../components/Content/ContentPage";

const Settings = () => {
    return (
        <ContentPage titulo="Configurações" caminho={[{nome: "Configurações", link: "/settings"}]}>
            <p>Conteudo da página aqui</p>
        </ContentPage>
    );
};

export default Settings;