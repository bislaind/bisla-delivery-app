export default function Label({ children, ...props }) {
  return (
    <label {...props} className="block font-medium text-sm text-gray-700 mb-1">
      {children}
    </label>
  );
}
