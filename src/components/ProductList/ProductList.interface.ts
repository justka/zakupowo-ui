export interface Product {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  isCompleted: boolean;
  categoryId: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  products: Product[];
  isExpanded: boolean;
}

export interface ProductListInterface {
  categories: Category[];
  onToggleCategory: (categoryId: string) => void;
  onToggleProduct: (productId: string) => void;
  onEditProduct: (productId: string) => void;
  onDeleteProduct: (productId: string) => void;
  onViewProduct: (productId: string) => void;
  onAddProduct: () => void;
  onEditCategory: (categoryId: string) => void;
  onDeleteCategory: (categoryId: string) => void;
}
