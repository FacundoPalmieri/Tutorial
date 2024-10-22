import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Java',
    Svg: require('@site/static/img/java.svg').default,
    description: (
      <>
        Bases y fundamentos del lenguaje.
      </>
    ),
  },
  {
    title: 'Spring Boot',
    Svg: require('@site/static/img/springboot.svg').default,
    description: (
      <>
        Simplificando el desarrollo de API REST ágiles y escalables.
      </>
    ),
  },
  {
    title: 'Spring Security',
    Svg: require('@site/static/img/springSecurity.svg').default,
    description: (
      <>
        Protección robusta para las aplicaciones con autenticación y autorización integradas.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
