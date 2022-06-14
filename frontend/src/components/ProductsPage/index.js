import { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchProducts, updateCurrentProductId } from "../../store/product";
import { SearchContext } from "../../context/Search";
import EditProductFormModal from "../EditProductFormModal";
import DeleteProduct from "../DeleteProduct";
import "./ProductsPage.css";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productState.products);
  const sessionUser = useSelector((state) => state.session.user);
  const { currentSearch } = useContext(SearchContext);
  const productsArray = Object.values(products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredProducts = productsArray?.filter((product) =>
    product.title?.toLowerCase().includes(currentSearch?.toLowerCase())
  );

  const handleOnClick = (id) => {
    dispatch(updateCurrentProductId(id));
  };

  const renderButtons = (product) => {
    if (sessionUser) {
      if (sessionUser.id === product.ownerId) {
        return (
          <div id="buttonsDivMain">
            <EditProductFormModal user={sessionUser} />
            <DeleteProduct user={sessionUser} />
          </div>
        );
      }
    }
  };

  return (
    <div className="productsContainer" key={filteredProducts?.id}>
      <div className="ripple-background">
        <div className="circle xxlarge shade1"></div>
        <div className="circle xlarge shade2"></div>
        <div className="circle large shade3"></div>
        <div className="circle mediun shade4"></div>
        <div className="circle small shade5"></div>
      </div>
      {filteredProducts &&
        filteredProducts
          .slice(0)
          .reverse()
          .map((product) => (
            <div
              className="productContainer"
              key={product.id}
              onClick={() => handleOnClick(product.id)}
            >
              <div className="card-top">
                <NavLink to={`/api/products/${product.id}`}>
                  <h3 className="productTitle">{product.title}</h3>
                </NavLink>
                {renderButtons(product)}
              </div>
              <NavLink to={`/api/products/${product.id}`}>
                {
                  <img
                    className="product-image"
                    src={product.imageUrl}
                    alt={product.title}
                    onError={({ currentTarget }) => {
                      currentTarget.onerror = null;
                      currentTarget.src =
                        "https://res.cloudinary.com/dn0ocfiva/image/upload/v1653045697/star-yelp/brokenimage_rtafkm.png";
                    }}
                  />
                }
              </NavLink>
            </div>
          ))}
      <h3 className="end-text">No more Products</h3>
    </div>
  );
};

export default ProductList;
