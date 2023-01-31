type AppButtonProps =
  | {
      type: 'button';
      btnText: string;
    }
  | {
      type: 'link';
      href: string;
    };

function AppButton(props: AppButtonProps) {
  if (props.type === 'link') return <a href={props.href}>This is a link</a>;

  return <button>{props.btnText}</button>;
}

export default AppButton;
