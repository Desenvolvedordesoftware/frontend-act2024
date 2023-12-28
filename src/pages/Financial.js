import ContentPage from "../components/Content/ContentPage";

const Financial = () => {
    return (
        <ContentPage titulo="Financeiro"  caminho={[{nome: "Financeiro", link: "/financial"}]}>
            <p>Conteudo da página aqui</p>
        </ContentPage>
    );
};

export default Financial;