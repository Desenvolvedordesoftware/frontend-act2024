import ContentPage from "../components/Content/ContentPage";

const Movements = () => {
    return (
        <ContentPage titulo="Movimentos" caminho={[{nome: "Movimentos", link: "/movements"}]}>
            <p>Conteudo da página aqui</p>
        </ContentPage>
    );
};

export default Movements;