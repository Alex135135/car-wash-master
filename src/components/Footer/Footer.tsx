import s from './Footer.module.scss';
import Link from 'next/link';
import Image from 'next/image';

interface SocialLink {
  href: string;
  src: string;
  alt: string;
}

const SOCIAL_LINKS: SocialLink[] = [
  { href: '#', src: '/vk.png', alt: 'ВКонтакте' },
  { href: '#', src: '/odnoklassniki.png', alt: 'Одноклассники' },
  { href: '#', src: '/telegram.png', alt: 'Telegram' },
];

export function Footer() {
  return (
    <footer className={s.footer} aria-label="Подвал сайта">
      <div className={s.footer__top}>
        <article className={s.footer__section}>
          <h3 className={s.section__title}>Контакты</h3>
          <ul className={s.contacts_list}>
            <li className={s.section__text}>ул. Чистоты, 7</li>
            <li className={s.section__text}>Пн–Вс: 8:00–22:00</li>
            <li className={s.section__text}>
              <a href="tel:+74951234567" className={s.phone_link}>
                +7 (495) 123-45-67
              </a>
            </li>
          </ul>
        </article>

        <article className={s.footer__section}>
          <h3 className={s.section__title}>Навигация</h3>
          <nav aria-label="Основное меню подвала" className={s.nav}>
            <ul className={s.links_list}>
              <li>
                <Link href="/" className={s.section__link}>
                  Главная
                </Link>
              </li>
              <li>
                <Link href="/services" className={s.section__link}>
                  Услуги
                </Link>
              </li>
              <li>
                <Link href="/booking" className={s.section__link}>
                  Запись
                </Link>
              </li>
            </ul>
          </nav>
        </article>

        <article className={s.footer__section}>
          <h3 className={s.section__title}>Соцсети</h3>
          <div className={s.socials}>
            {SOCIAL_LINKS.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={s.social__link}
                aria-label={item.alt}
              >
                <div className={s.icon_container}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={40}
                    height={40}
                    className={s.social__icon}
                    unoptimized // убрать, если картинки лежат в public и оптимизируются
                  />
                </div>
              </a>
            ))}
          </div>
        </article>
      </div>

      <div className={s.footer__divider} role="separator" aria-hidden="true"></div>

      <div className={s.footer__bottom}>
        <Link
          href="/"
          className={s.footer__logo}
          aria-label="На главную: AquaShine"
        >
          <span className={s.logoContainer}>
            <Image
              src="/Logo.png"
              alt="Логотип AquaShine"
              fill
              className={s.logo}
            />
          </span>
          <span className={s.logolink__span}>AquaShine</span>
        </Link>
        <p className={s.copyright}>© 2025 AquaShine.</p>
      </div>
    </footer>
  );
}