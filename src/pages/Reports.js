import ContentPage from "../components/Content/ContentPage";

const Reports = () => {
    return (
        <ContentPage titulo="Relatórios" caminho={[{nome: "Relatórios", link: "/reports"}]}>
            <p>Conteudo da página aqui</p>
        </ContentPage>
    );
};

export default Reports;