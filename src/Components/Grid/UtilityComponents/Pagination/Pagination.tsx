import './Pagination.css';

interface IPagination {
    totalProducts: number,
    currentPage: number,
    productsPerPage: number,
    setCurrentPage:(page:number)=>void
}
const Pagination = (props: IPagination) => {
    const { totalProducts, currentPage, productsPerPage, setCurrentPage } = props
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div className="pagination">
            {pageNumbers.map(number => (
                <span key={number} className={currentPage === number ? 'active page-link' : 'page-link'} onClick={() => setCurrentPage(number)}>{number}</span>
            ))}
        </div>
    )
}

export default Pagination;