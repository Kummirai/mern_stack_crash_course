const ProductCard = () => {
  return (
    <div className="border border-blue-100 h-68 rounded-xs">
      <div className="p-1">
        <img
          src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="rounded-xs"
        />
      </div>
      <div className="p-2">
        <h2 className="font-semibold text-blue-950 text-lg">Apple Watch</h2>
        <h3 className="text-slate-600 font-normal">$349.99</h3>
      </div>
    </div>
  );
};

export default ProductCard;
