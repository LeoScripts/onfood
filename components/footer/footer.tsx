import Styles from './footer.module.css';

export function Footer() {
  return (
    <footer>
      <div className={Styles.footer}>
        <p>&copy;2022 Leandro Cavalcante todos os direitos reservados</p>
      </div>
    </footer>
  );
}