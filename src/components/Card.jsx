const Card = ({ 
  title, 
  children, 
  className = '', 
  onClick,
  variant = 'default' 
}) => {
  const baseClasses = 'rounded-lg shadow-md transition-shadow duration-200';
  
  const variants = {
    default: 'bg-white border border-gray-200 hover:shadow-lg',
    primary: 'bg-blue-50 border border-blue-200 hover:shadow-lg',
    success: 'bg-green-50 border border-green-200 hover:shadow-lg',
    warning: 'bg-yellow-50 border border-yellow-200 hover:shadow-lg',
  };

  const cardClasses = `${baseClasses} ${variants[variant]} ${className} ${
    onClick ? 'cursor-pointer' : ''
  }`;

  return (
    <div className={cardClasses} onClick={onClick}>
      <div className="p-6">
        {title && (
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            {title}
          </h3>
        )}
        {children}
      </div>
    </div>
  );
};

export default Card;
