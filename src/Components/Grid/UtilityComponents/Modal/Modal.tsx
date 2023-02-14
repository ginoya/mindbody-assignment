import './Modal.css';

interface IModal {
    closeModal: () => void,
    modalData: {
        showModal:boolean,
        selectedProduct:any
    }
}

const Modal = (props: IModal) => {
    const { closeModal, modalData:{showModal,selectedProduct} } = props;
    return (
        showModal ? (
            <div className="modal-background" onClick={closeModal}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <div className="product-details">
                        <img src={selectedProduct.thumbnail} alt={selectedProduct.title} />
                        <div className="product-info">
                            <h2>{selectedProduct.title}</h2>
                            <p>{selectedProduct.description}</p>
                            <div className="product-properties">
                                <div>
                                    <span>Brand:</span>
                                    <span>{selectedProduct.brand}</span>
                                </div>
                                <div>
                                    <span>Category:</span>
                                    <span>{selectedProduct.category}</span>
                                </div>
                                <div>
                                    <span>Price:</span>
                                    <span>{selectedProduct.price}</span>
                                </div>
                                <div>
                                    <span>Discount:</span>
                                    <span>{selectedProduct.discountPercentage}%</span>
                                </div>
                                <div>
                                    <span>Rating:</span>
                                    <span>{selectedProduct.rating}</span>
                                </div>
                                <div>
                                    <span>Stock:</span>
                                    <span>{selectedProduct.stock}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="close-button" onClick={closeModal}>Close</button>
                </div>
            </div>
        ) : null
    )
}

export default Modal;