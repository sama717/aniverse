import '../css/store.css';

function Store () {
    return (
        <div className="store container-fluid">
            <h1>STORE</h1>

            <div className="row manga">
                <div className='shop-title'>
                    <h2>Manga</h2>
                </div>
                <div className="store-content col-lg-3 col-md-6">
                    <div className="store-img">
                        <img src="../src/assets/chainsaw-manga.jpeg" alt="" />
                    </div>
                    <div className="store-info">
                        <h2>Chainsaw Man</h2>
                        <p>Price: $5.99</p>
                        <button className='btn btn-light'>Add to Cart</button>
                    </div>
                </div>
                <div className="store-content col-lg-3 col-md-6">
                    <div className="store-img">
                        <img src="../src/assets/demon-slayer-manga.webp" alt="" />
                    </div>
                    <div className="store-info">
                        <h2>Demon Slayer</h2>
                        <p>Price: $5.99</p>
                        <button className='btn btn-light'>Add to Cart</button>
                    </div>
                </div>
                <div className="store-content col-lg-3 col-md-6">
                    <div className="store-img">
                        <img src="../src/assets/Jujutsu_kaisen-manga.jpeg" alt="" />
                    </div>
                    <div className="store-info">
                        <h2>Jujutsu Kaisen</h2>
                        <p>Price: $5.99</p>
                        <button className='btn btn-light'>Add to Cart</button>
                    </div>
                </div>
                <div className="store-content col-lg-3 col-md-6">
                    <div className="store-img">
                        <img src="../src/assets/OnePieceManga.jpeg" alt="" />
                    </div>
                    <div className="store-info">
                        <h2>One Piece</h2>
                        <p>Price: $5.99</p>
                        <button className='btn btn-light'>Add to Cart</button>
                    </div>
                </div>
            </div>
            <div className="row merch">
                <div>
                    <h2>Merch</h2>
                </div>
                <div className="store-content col-lg-3 col-md-6">
                    <div className="store-img">
                        <img src="../src/assets/chainsaw-shirt.png" alt="" />
                    </div>
                    <div className="store-info">
                        <h2>Chainsaw Man Shirt</h2>
                        <p>Price: $20</p>
                        <button className='btn btn-light'>Add to Cart</button>
                    </div>
                </div>
                <div className="store-content col-lg-3 col-md-6">
                    <div className="store-img">
                        <img src="../src/assets/ds-merch.png" alt="" />
                    </div>
                    <div className="store-info">
                        <h2>Demon Slayer Hoodie</h2>
                        <p>Price: $25</p>
                        <button className='btn btn-light'>Add to Cart</button>
                    </div>
                </div>
                <div className="store-content col-lg-3 col-md-6">
                    <div className="store-img">
                        <img src="../src/assets/jjk-merch.png" alt="" />
                    </div>
                    <div className="store-info">
                        <h2>Jujutsu Kaisen Hoodie</h2>
                        <p>Price: $30.99</p>
                        <button className='btn btn-light'>Add to Cart</button>
                    </div>
                </div>
                <div className="store-content col-lg-3 col-md-6">
                    <div className="store-img">
                        <img src="../src/assets/one-p-merch.png" alt="" />
                    </div>
                    <div className="store-info">
                        <h2>One Piece Shirt</h2>
                        <p>Price: $20.99</p>
                        <button className='btn btn-light'>Add to Cart</button>
                    </div>
                </div>
            </div>  
        </div>
    );
}
export default Store;