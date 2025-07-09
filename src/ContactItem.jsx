function ContactItem({ icon, iconBgColor, children }) {
  return (
    <div className='flex items-center space-x-3'>
      <div className={`w-8 h-8 ${iconBgColor} rounded-full flex items-center justify-center`}>
        {icon}
      </div>
      <div>
        {children}
      </div>
    </div>
  );
}

export { ContactItem };
