import "./ProductList.scss";
import React from "react";
import { ProductListInterface } from "./ProductList.interface";

export function ProductList({
  categories,
  onAddProduct,
  onDeleteCategory,
  onDeleteProduct,
  onEditCategory,
  onEditProduct,
  onToggleCategory,
  onToggleProduct,
  onViewProduct,
}: ProductListInterface) {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "bakery":
        return "🥖";
      case "dairy":
        return "🧀";
      case "fruits":
        return "✂️";
      default:
        return "📦";
    }
  };

  const getCompletedCount = (category: any) => {
    return category.products.filter((product: any) => product.isCompleted)
      .length;
  };

  return (
    <div className="product-list">
      <h1 className="product-list__title">Lista produktów</h1>

      <div className="product-list__content">
        {categories.map((category) => (
          <div
            className="product-list__category"
            key={category.id}
          >
            {/* Category Header */}
            <div
              className={`product-list__category-header ${category.isExpanded ? "expanded" : ""}`}
              onClick={() => onToggleCategory(category.id)}
            >
              <div className="product-list__category-info">
                <span className="product-list__category-icon">
                  {getCategoryIcon(category.icon)}
                </span>
                <span className="product-list__category-name">
                  {category.name} {getCompletedCount(category)} /{" "}
                  {category.products.length}
                </span>
              </div>

              <div className="product-list__category-actions">
                <button
                  className="product-list__action-btn product-list__action-btn--edit"
                  onClick={(e) => {
                    e.stopPropagation();
                    onEditCategory(category.id);
                  }}
                  title="Edytuj kategorię"
                >
                  ✏️
                </button>
                <button
                  className="product-list__action-btn product-list__action-btn--delete"
                  onClick={(e) => {
                    e.stopPropagation();
                    onDeleteCategory(category.id);
                  }}
                  title="Usuń kategorię"
                >
                  🗑️
                </button>
                <span className="product-list__expand-icon">
                  {category.isExpanded ? "▲" : "▼"}
                </span>
              </div>
            </div>

            {/* Category Products */}
            {category.isExpanded && (
              <div className="product-list__products">
                {category.products.map((product) => (
                  <div
                    className={`product-list__product ${product.isCompleted ? "completed" : ""}`}
                    key={product.id}
                  >
                    <div className="product-list__product-info">
                      <input
                        checked={product.isCompleted}
                        className="product-list__checkbox"
                        onChange={() => onToggleProduct(product.id)}
                        type="checkbox"
                      />
                      <span className="product-list__product-name">
                        {product.name}
                      </span>
                    </div>

                    <div className="product-list__product-details">
                      <span className="product-list__product-quantity">
                        {product.quantity} {product.unit}
                      </span>

                      <div className="product-list__product-actions">
                        <button
                          className="product-list__action-btn product-list__action-btn--delete"
                          onClick={() => onDeleteProduct(product.id)}
                          title="Usuń produkt"
                        >
                          🗑️
                        </button>
                        <button
                          className="product-list__action-btn product-list__action-btn--edit"
                          onClick={() => onEditProduct(product.id)}
                          title="Edytuj produkt"
                        >
                          ✏️
                        </button>
                        <button
                          className="product-list__action-btn product-list__action-btn--view"
                          onClick={() => onViewProduct(product.id)}
                          title="Zobacz produkt"
                        >
                          👁️
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Floating Action Button */}
      <button
        className="product-list__fab"
        onClick={onAddProduct}
        title="Dodaj produkt"
      >
        +
      </button>
    </div>
  );
}
