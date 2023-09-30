import { IButtonProps } from '@/lib/interfaces';

const Button = ({ btnLabel, onClick, className }: IButtonProps) => {
  return (
    <button
      className={`bg-slate-900 p-3 rounded-lg block ${className}`}
      onClick={onClick}
    >
      {btnLabel}
    </button>
  );
};

export default Button;
