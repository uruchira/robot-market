import React, { useState, useEffect, useMemo } from 'react';
import { useQuery } from 'react-query';

import Header from './Layout/Header';
import Footer from './Layout/Footer';

import ProductGrid from './Products/ProductGrid';
import ProductFilter from './Products/ProductFilter';
import CartList from './Cart/CartList';

import axiosClient from './util/api';
import { getMaterialList } from './util';

import loading from './assets/loading.gif';

function App() {
  const [materialList, setMaterialList] = useState([]);
  const [currentMaterial, setCurrentMaterial] = useState('All');

  async function fetchProducts() {
    const {
      data: { data }
    } = await axiosClient.get('/robots');
    return data;
  }

  const {
    data: products,
    error,
    isError,
    isLoading
  } = useQuery('products', fetchProducts);

  const productList = useMemo(() => {
    if (currentMaterial === 'All') return products;
    return products.filter((product) => product.material === currentMaterial);
  }, [currentMaterial, products]);

  useEffect(() => {
    if (products) {
      setMaterialList(getMaterialList(products));
    }
  }, [products]);

  const handleCurrentMaterialSelect = (e) => {
    setCurrentMaterial(e.target.value);
  };

  const renderProductGrid = () => {
    if (isLoading) {
      return (
        <div className="logo-center">
          <img src={loading} alt="loading..." />
        </div>
      );
    }
    if (isError) {
      return <div className="alert">Error: {error.message}</div>;
    }

    return <ProductGrid list={productList} />;
  };

  const renderProductFilter = () => {
    return (
      !!materialList.length && (
        <ProductFilter
          items={materialList}
          onItemSelect={handleCurrentMaterialSelect}
        />
      )
    );
  };

  return (
    <div className="wrapper">
      <Header />
      <div className="main-section">
        <div className="product-section">
          <div className="product-header">
            <p>{productList && `Showing ${productList.length} products`} </p>
            <div>{renderProductFilter()}</div>
          </div>
          <div className="product-grid">{renderProductGrid()}</div>
        </div>
        <div className="cart-section">
          <CartList />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
