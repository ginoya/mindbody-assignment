import React, { useState, useEffect } from 'react';
import Modal from './UtilityComponents/Modal/Modal';
import './Grid.css';
import Pagination from './UtilityComponents/Pagination/Pagination';

export const getSortIcon = (field: string, sortField: string, sortOrder: string) => {
    if (field === sortField) {
        if (sortOrder === 'asc') return <i className="fa fa-sort-asc"></i>;
        else return <i className="fa fa-sort-desc"></i>
    }
    return <></>
}
interface IColumns {
    field: 'id' | 'title' | 'brand',
    displayName: string
}

interface Product {
    id: string;
    title: string;
    brand: string;
}

interface Column {
    field: string;
    displayName: string;
}

const columns: Column[] = [
    { field: 'id', displayName: 'ID' },
    { field: 'title', displayName: 'Title' },
    { field: 'brand', displayName: 'Brand' }
];
const productsPerPage = 10;
const Grid = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [sortedProducts, setSortedProducts] = useState<Product[]>([]);
    const [sortBy, setSortBy] = useState<string>('id');
    const [sortOrder, setSortOrder] = useState<string>('asc');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [modalData, setModalData] = useState({ showModal: false, selectedProduct: {} })

    useEffect(() => {
        fetch('https://dummyjson.com/products?skip=0&limit=100')
            .then(res => res.json())
            .then(data => setProducts(data.products))
    }, [])

    useEffect(() => {
        let sorted = [];
        if (products && products.length > 0) {
            if (sortOrder === 'asc') sorted = products.sort((a: any, b: any) => (a[sortBy] < b[sortBy] ? -1 : 1));
            else sorted = products.sort((a: any, b: any) => (a[sortBy] < b[sortBy] ? 1 : -1));
            setSortedProducts([...sorted]);
        }
    }, [products, sortBy, sortOrder]);

    const handleSortBy = (field: string) => {
        if (field === sortBy) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        }
        else {
            setSortOrder('asc');
            setSortBy(field);
        }
    };

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const closeModal = () => {
        setModalData({ ...modalData, showModal: false });
    };
    const openModal = (product: any) => {
        setModalData({ ...modalData, showModal: true, selectedProduct: product });
    };
    return (
        <div>
            <table>
                <thead>
                    <tr > 
                        {columns.map(column =>
                            <th key={`header-${column.field}`} onClick={() => handleSortBy(column.field)}>{column.displayName} {getSortIcon(column.field, sortBy, sortOrder)}</th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {currentProducts.map((product: any) => (
                        <tr key={product.id} onClick={() => openModal(product)} className='grid-row'>
                            {columns.map(column => <td key={column.field}>{product[column.field]}</td>)}
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination totalProducts={sortedProducts.length} currentPage={currentPage} productsPerPage={productsPerPage} setCurrentPage={setCurrentPage}/>
            <Modal closeModal={closeModal} modalData={modalData} />
        </div>
    );
}

export default Grid;

