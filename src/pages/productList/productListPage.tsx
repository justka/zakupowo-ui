import React, { useState } from "react";
import { ProductList } from "../../components/ProductList";
import { Category } from "../../components/ProductList";

export function ProductListPage() {
  const [categories, setCategories] = useState<Category[]>([
    {
      icon: "dairy",
      id: "1",
      isExpanded: true,
      name: "Nabiał",
      products: [
        {
          categoryId: "1",
          id: "1",
          isCompleted: false,
          name: "Itambe Mleko 3,2%",
          quantity: 2,
          unit: "szt.",
        },
        {
          categoryId: "1",
          id: "2",
          isCompleted: false,
          name: "Itambe Mleko 3,2%",
          quantity: 2,
          unit: "szt.",
        },
        {
          categoryId: "1",
          id: "3",
          isCompleted: false,
          name: "Itambe Mleko 3,2%",
          quantity: 2,
          unit: "szt.",
        },
        {
          categoryId: "1",
          id: "4",
          isCompleted: false,
          name: "Itambe Mleko 3,2%",
          quantity: 2,
          unit: "szt.",
        },
        {
          categoryId: "1",
          id: "5",
          isCompleted: false,
          name: "Itambe Mleko 3,2%",
          quantity: 2,
          unit: "szt.",
        },
        {
          categoryId: "1",
          id: "6",
          isCompleted: true,
          name: "Itambe Mleko 3,2%",
          quantity: 2,
          unit: "szt.",
        },
      ],
    },
    {
      icon: "fruits",
      id: "2",
      isExpanded: false,
      name: "Owoce",
      products: [
        {
          categoryId: "2",
          id: "7",
          isCompleted: false,
          name: "Jabłka",
          quantity: 1,
          unit: "kg",
        },
        {
          categoryId: "2",
          id: "8",
          isCompleted: false,
          name: "Banany",
          quantity: 2,
          unit: "szt.",
        },
      ],
    },
    {
      icon: "bakery",
      id: "3",
      isExpanded: false,
      name: "Pieczywo",
      products: [
        {
          categoryId: "3",
          id: "9",
          isCompleted: false,
          name: "Chleb razowy",
          quantity: 1,
          unit: "szt.",
        },
      ],
    },
  ]);

  const handleToggleCategory = (categoryId: string) => {
    setCategories((prev) =>
      prev.map((cat) =>
        cat.id === categoryId ? { ...cat, isExpanded: !cat.isExpanded } : cat
      )
    );
  };

  const handleToggleProduct = (productId: string) => {
    setCategories((prev) =>
      prev.map((cat) => ({
        ...cat,
        products: cat.products.map((product) =>
          product.id === productId
            ? { ...product, isCompleted: !product.isCompleted }
            : product
        ),
      }))
    );
  };

  const handleEditProduct = (productId: string) => {
    console.log("Edit product:", productId);
    // Implement edit logic
  };

  const handleDeleteProduct = (productId: string) => {
    setCategories((prev) =>
      prev.map((cat) => ({
        ...cat,
        products: cat.products.filter((product) => product.id !== productId),
      }))
    );
  };

  const handleViewProduct = (productId: string) => {
    console.log("View product:", productId);
    // Implement view logic
  };

  const handleAddProduct = () => {
    console.log("Add new product");
    // Implement add logic
  };

  const handleEditCategory = (categoryId: string) => {
    console.log("Edit category:", categoryId);
    // Implement edit logic
  };

  const handleDeleteCategory = (categoryId: string) => {
    setCategories((prev) => prev.filter((cat) => cat.id !== categoryId));
  };

  return (
    <ProductList
      categories={categories}
      onAddProduct={handleAddProduct}
      onDeleteCategory={handleDeleteCategory}
      onDeleteProduct={handleDeleteProduct}
      onEditCategory={handleEditCategory}
      onEditProduct={handleEditProduct}
      onToggleCategory={handleToggleCategory}
      onToggleProduct={handleToggleProduct}
      onViewProduct={handleViewProduct}
    />
  );
}
