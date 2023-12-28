import ContentPage from "../components/Content/ContentPage";

const Stock = () => {
    return (
        <ContentPage titulo="Estoque" caminho={[{nome: "Estoque", link: "/stock"}]}>
            <p>Conteudo da página aqui</p>
        </ContentPage>
    );
};

export default Stock;