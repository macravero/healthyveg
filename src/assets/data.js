import GreenPeas from './images/products/arvejas_verdes.png';
import GreenPeasPackage from './images/products/arvejas_verdes_paquete.png';
import GreenSplitPeas from './images/products/arvejas_verdes_partidas.png';
import GreenSplitPeasPackage from './images/products/arvejas_verdes_partidas_paquete.png';
import YellowPeas from './images/products/arvejas_amarillas.png';
import YellowPeasPackage from './images/products/arvejas_amarillas_paquete.png';
import Garbanzos from './images/products/garbanzos.png';
import GarbanzosPackage from './images/products/garbanzos_paquete.png';
import Lentejones from './images/products/lentejones.png';
import LentejonesPackage from './images/products/lentejones_paquete.png';
import PorotosAlubia from './images/products/porotos_alubia.png';
import PorotosAlubiaPackage from './images/products/porotos_alubia_paquete.png';
import PorotosNegros from './images/products/porotos_negros.png';
import PorotosNegrosPackage from './images/products/porotos_negros_paquete.png';
import PorotosColorados from './images/products/porotos_colorados.png';
import PorotosColoradosPackage from './images/products/porotos_colorados_paquete.png';
import PorotosCranberry from './images/products/porotos_cranberry.png';
import PorotosCranberryPackage from './images/products/porotos_cranberry_paquete.png';
import MaizPisingallo from './images/products/pisingallo.png';
import MaizPisingalloPackage from './images/products/pisingallo_paquete.png';
import Lentils from './images/products/lentejas.png';
import LentilsPackage from './images/products/lentejas_paquete.png';
import YellowSplitPeas from './images/products/arvejas_amarillas_partidas.png';
import YellowSplitPeasPackage from './images/products/arvejas_amarillas_partidas_paquete.png';
import HarinaVerdeCruda from './images/products/harina_arvejas_verde_cruda.png';
import HarinaVerdeCrudaPackage from './images/products/harina_arvejas_verde_cruda_paquete.png';
import HarinaVerdePrecocida from './images/products/harina_arvejas_verde_precocida.png';
import HarinaVerdePrecocidaPackage from './images/products/harina_arvejas_verde_precocida_paquete.png';
import HarinaAmarillaPrecocida from './images/products/harina_arvejas_amarilla_precocida.png';
import HarinaAmarillaPrecocidaPackage from './images/products/harina_arvejas_amarilla_precocida_paquete.png';
import HarinaLentejas from './images/products/harina_lentejas.png';
import HarinaLentejasPackage from './images/products/harina_lentejas_paquete.png';
import HarinaGarbanzos from './images/products/harina_garbanzos.png';
import HarinaGarbanzosPackage from './images/products/harina_garbanzos_paquete.png';
import TexturizadoArvejaVerde from './images/products/texturizado_arveja_verde.png';
// import TexturizadoArvejaVerdePackage from './images/products/texturizado_arveja_verde_paquete.png';
import TexturizadoArvejaAmarilla from './images/products/texturizado_arveja_amarilla.png';
// import TexturizadoArvejaAmarillaPackage from './images/products/texturizado_arveja_amarilla_paquete.png';
import NoPackage from './images/products/no_package.png';

const productData = [
  {
    title: 'arvejas verdes',
    subtitle: null,
    pictures: [GreenPeas, GreenPeasPackage],
    type: 'legumbres',
    description:
      'Las arvejas poseen un alto aporte de proteínas de origen vegetal, ricas en aminoácidos esenciales, que cumplen funciones estructurales en el organismo. Combinadas con cereales forman una proteína completa, similar a la de la carne. Contiene fibra, que ayuda a mejorar el tránsito intestinal y regular los niveles de glucosa en sangre, como así también de sustancias lipídicas. Aportan potasio y baja cantidad de sodio, por lo que ayudan a controlar la tensión arterial.',
    sinTacc: true,
    sinConservantes: true,
    sinLactosa: true,
    sinAzucar: true,
    nutritionalValues: {
      valorEnergetico: ['156 kcal = 653 kj', '8%', '312kcal = 1306 Kj'],
      carbohidratos: ['28 g.', '9%', '56 g.'],
      proteinas: ['11 g.', '15%', '22 g.'],
      grasasTotales: ['1 g.', '0%', '0 g.'],
      grasasSaturadas: ['0 g.', '0%', '0 g.'],
      grasasTrans: ['0 g.', '0%', '0 g.'],
      fibraAlimentaria: ['7 g.', '28%', '14 g.'],
      sodio: ['8,5 mg.', '0%', '17 mg.'],
    },
    id: 'arvejas-verdes',
  },
  {
    title: 'arvejas',
    subtitle: 'partidas verdes',
    pictures: [GreenSplitPeas, GreenSplitPeasPackage],
    type: 'legumbres',
    description:
      'Las arvejas poseen un alto aporte de proteínas de origen vegetal, ricas en aminoácidos esenciales, que cumplen funciones estructurales en el organismo. Combinadas con cereales forman una proteína completa, similar a la de la carne. Contiene fibra, que ayuda a mejorar el tránsito intestinal y regular los niveles de glucosa en sangre, como así también de sustancias lipídicas. Aportan potasio y baja cantidad de sodio, por lo que ayudan a controlar la tensión arterial.',
    sinTacc: true,
    sinConservantes: true,
    sinLactosa: true,
    sinAzucar: true,
    nutritionalValues: {
      valorEnergetico: ['156 kcal = 653 kj', '8%', '312kcal = 1306 Kj'],
      carbohidratos: ['28 g.', '9%', '56 g.'],
      proteinas: ['11 g.', '15%', '22 g.'],
      grasasTotales: ['1 g.', '0%', '0 g.'],
      grasasSaturadas: ['0 g.', '0%', '0 g.'],
      grasasTrans: ['0 g.', '0%', '0 g.'],
      fibraAlimentaria: ['7 g.', '28%', '14 g.'],
      sodio: ['8,5 mg.', '0%', '17 mg.'],
    },
    id: 'arvejas-partidas-verdes',
  },
  {
    title: 'arvejas amarillas',
    subtitle: null,
    pictures: [YellowPeas, YellowPeasPackage],
    type: 'legumbres',
    description:
      'Las arvejas poseen un alto aporte de proteínas de origen vegetal, ricas en aminoácidos esenciales, que cumplen funciones estructurales en el organismo. Combinadas con cereales forman una proteína completa, similar a la de la carne. Contiene fibra, que ayuda a mejorar el tránsito intestinal y regular los niveles de glucosa en sangre, como así también de sustancias lipídicas. Aportan potasio y baja cantidad de sodio, por lo que ayudan a controlar la tensión arterial.',
    sinTacc: true,
    sinConservantes: true,
    sinLactosa: true,
    sinAzucar: true,
    nutritionalValues: {
      valorEnergetico: ['156 kcal = 653 kj', '8%', '312kcal = 1306 Kj'],
      carbohidratos: ['28 g.', '9%', '56 g.'],
      proteinas: ['11 g.', '15%', '22 g.'],
      grasasTotales: ['1 g.', '0%', '0 g.'],
      grasasSaturadas: ['0 g.', '0%', '0 g.'],
      grasasTrans: ['0 g.', '0%', '0 g.'],
      fibraAlimentaria: ['7 g.', '28%', '14 g.'],
      sodio: ['8,5 mg.', '0%', '17 mg.'],
    },
    id: 'arvejas-amarillas',
  },
  {
    title: 'arvejas',
    subtitle: 'partidas amarillas',
    pictures: [YellowSplitPeas, YellowSplitPeasPackage],
    type: 'legumbres',
    description:
      'Las arvejas poseen un alto aporte de proteínas de origen vegetal, ricas en aminoácidos esenciales, que cumplen funciones estructurales en el organismo. Combinadas con cereales forman una proteína completa, similar a la de la carne. Contiene fibra, que ayuda a mejorar el tránsito intestinal y regular los niveles de glucosa en sangre, como así también de sustancias lipídicas. Aportan potasio y baja cantidad de sodio, por lo que ayudan a controlar la tensión arterial.',
    sinTacc: true,
    sinConservantes: true,
    sinLactosa: true,
    sinAzucar: true,
    nutritionalValues: {
      valorEnergetico: ['156 kcal = 653 kj', '8%', '312kcal = 1306 Kj'],
      carbohidratos: ['28 g.', '9%', '56 g.'],
      proteinas: ['11 g.', '15%', '22 g.'],
      grasasTotales: ['1 g.', '0%', '0 g.'],
      grasasSaturadas: ['0 g.', '0%', '0 g.'],
      grasasTrans: ['0 g.', '0%', '0 g.'],
      fibraAlimentaria: ['7 g.', '28%', '14 g.'],
      sodio: ['8,5 mg.', '0%', '17 mg.'],
    },
    id: 'arvejas-partidas-amarillas',
  },
  {
    title: 'Lentejas',
    subtitle: null,
    pictures: [Lentils, LentilsPackage],
    type: 'legumbres',
    description:
      'El grano de Lenteja es muy valorado por su aptitud nutricional, entre ellas podemos destacar es rico en fósforo, rico en vitaminas del complejo B, vitamina K y con altos niveles de fibra, lo que es muy valorado para las dietas, además no contiene colesterol.',
    sinTacc: true,
    sinConservantes: true,
    sinLactosa: true,
    sinAzucar: true,
    nutritionalValues: {
      valorEnergetico: ['210 kcal = 879 kj', '11%', '340kcal = 1423 Kj'],
      carbohidratos: ['36 g.', '12%', '60 g.'],
      proteinas: ['15 g.', '20%', '25 g.'],
      grasasTotales: ['0,7 g.', '1%', '1,1 g.'],
      grasasSaturadas: ['0 g.', '0%', '0 g.'],
      grasasTrans: ['0 g.', '0%', '0 g.'],
      fibraAlimentaria: ['6 g.', '24%', '11 mg.'],
      sodio: ['18 mg.', '1%', '30 mg.'],
    },
    id: 'lentejas',
  },
  {
    title: 'garbanzos',
    subtitle: 'enteros/partidos',
    pictures: [Garbanzos, GarbanzosPackage],
    type: 'legumbres',
    description:
      'El producto es valorado por distintas características, entre ellas podemos destacar las más importantes: el garbanzo es de una riqueza formidable en lo que a aportes nutritivos se refiere. Es rico en proteínas, en almidón y en lípidos (más que las otras legumbres) sobre todo de ácido oleico y linoleico, que son insaturados y carentes de colesterol. Del mismo modo el garbanzo es un buen aporte de fibra lo que ayuda a reducir los niveles de colesterol y calorías. El Garbanzo es muy rico en Potasio, Calcio, Magnesio y Fósforo. Los garbanzos también contienen Vitamina A, tiamina, rivoflavina, niacina, Vitamina B1, B2, B3, B5, B6, B7, B9, B12 folato, Vitamina C, Vitamina E y Vitamina K.',
    sinTacc: true,
    sinConservantes: true,
    sinLactosa: true,
    sinAzucar: true,
    nutritionalValues: {
      valorEnergetico: ['222 kcal = 929 kj', '11%', '3260kcal = 1088 Kj'],
      carbohidratos: ['37 g.', '12%', '60 g.'],
      proteinas: ['12 g.', '16%', '24 g.'],
      grasasTotales: ['2,9 g.', '5%', '1,4 g.'],
      grasasSaturadas: ['0 g.', '0%', '0 g.'],
      grasasTrans: ['0 g.', '0%', '0 g.'],
      fibraAlimentaria: ['6,6 g.', '26%', '13 mg.'],
      sodio: ['16 mg.', '1%', '35 mg.'],
    },
    id: 'garbanzos',
  },
  {
    title: 'lentejones',
    subtitle: null,
    pictures: [Lentejones, LentejonesPackage],
    type: 'legumbres',
    description:
      'El grano de Lenteja es muy valorado por su aptitud nutricional, entre ellas podemos destacar es rico en fósforo, rico en vitaminas del complejo B, vitamina K y con altos niveles de fibra, lo que es muy valorado para las dietas, además no contiene colesterol.',
    sinTacc: true,
    sinConservantes: true,
    sinLactosa: true,
    sinAzucar: true,
    nutritionalValues: {
      valorEnergetico: ['210 kcal = 879 kj', '11%', '350kcal = 1423 Kj'],
      carbohidratos: ['36 g.', '12%', '60 g.'],
      proteinas: ['15 g.', '20%', '25 g.'],
      grasasTotales: ['0,7 g.', '1%', '1,1 g.'],
      grasasSaturadas: ['0 g.', '0%', '0 g.'],
      grasasTrans: ['0 g.', '0%', '0 g.'],
      fibraAlimentaria: ['6 g.', '24%', '11 mg.'],
      sodio: ['18 mg.', '1%', '30 mg.'],
    },
    id: 'lentejones',
  },
  {
    title: 'porotos alubia',
    subtitle: null,
    pictures: [PorotosAlubia, PorotosAlubiaPackage],
    type: 'legumbres',
    description:
      'El producto es valorado por distintas características, entre ellas podemos destacar las más importantes: el poroto es de una riqueza formidable en lo que a aportes nutritivos se refiere. Es rico en proteínas, en almidón y en lípidos insaturados y carentes de colesterol. Del mismo modo el poroto es un buen aporte de fibra lo que ayuda a reducir los niveles de colesterol y calorías. El poroto es muy rico en Potasio, Calcio, Magnesio y Fósforo.',
    sinTacc: true,
    sinConservantes: true,
    sinLactosa: true,
    sinAzucar: true,
    nutritionalValues: {
      valorEnergetico: ['209 kcal = 879 kj', '10%', '348kcal = 1456 Kj'],
      carbohidratos: ['37 g.', '12%', '61 g.'],
      proteinas: ['13 g.', '17%', '21 g.'],
      grasasTotales: ['1 g.', '2%', '1,6 g.'],
      grasasSaturadas: ['0 g.', '0%', '0 g.'],
      grasasTrans: ['0 g.', '0%', '0 g.'],
      fibraAlimentaria: ['9 g.', '36%', '15 mg.'],
      sodio: ['0 mg.', '0%', '0 mg.'],
    },
    id: 'porotos-alubia',
  },
  {
    title: 'porotos negros',
    subtitle: null,
    pictures: [PorotosNegros, PorotosNegrosPackage],
    type: 'legumbres',
    description:
      'El producto es valorado por distintas características, entre ellas podemos destacar las más importantes: el poroto es de una riqueza formidable en lo que a aportes nutritivos se refiere. Es rico en proteínas, en almidón y en lípidos insaturados y carentes de colesterol. Del mismo modo el poroto es un buen aporte de fibra lo que ayuda a reducir los niveles de colesterol y calorías. El poroto es muy rico en Potasio, Calcio, Magnesio y Fósforo.',
    sinTacc: true,
    sinConservantes: true,
    sinLactosa: true,
    sinAzucar: true,
    nutritionalValues: {
      valorEnergetico: ['141 kcal = 590 kj', '7%', '348kcal = 1456 Kj'],
      carbohidratos: ['19 g.', '6%', '61 g.'],
      proteinas: ['14 g.', '19%', '21 g.'],
      grasasTotales: ['1 g.', '2%', '1,6 g.'],
      grasasSaturadas: ['0 g.', '0%', '0 g.'],
      grasasTrans: ['0 g.', '0%', '0 g.'],
      fibraAlimentaria: ['16 g.', '64%', '15 mg.'],
      sodio: ['0 mg.', '0%', '0 mg.'],
    },
    id: 'porotos-negros',
  },
  {
    title: 'poroto colorado',
    subtitle: null,
    pictures: [PorotosColorados, PorotosColoradosPackage],
    type: 'legumbres',
    description:
      'El producto es valorado por distintas características, entre ellas podemos destacar las más importantes: el poroto es de una riqueza formidable en lo que a aportes nutritivos se refiere. Es rico en proteínas, en almidón y en lípidos insaturados y carentes de colesterol. Del mismo modo el poroto es un buen aporte de fibra lo que ayuda a reducir los niveles de colesterol y calorías. El poroto es muy rico en Potasio, Calcio, Magnesio y Fósforo.',
    sinTacc: true,
    sinConservantes: true,
    sinLactosa: true,
    sinAzucar: true,
    nutritionalValues: {
      valorEnergetico: ['148 kcal = 619 kj', '7%', '246kcal = 1031 Kj'],
      carbohidratos: ['20 g.', '7%', '33 g.'],
      proteinas: ['15 g.', '20%', '25 g.'],
      grasasTotales: ['0,9 g.', '2%', '1,5 g.'],
      grasasSaturadas: ['0 g.', '0%', '0 g.'],
      grasasTrans: ['0 g.', '0%', '0 g.'],
      fibraAlimentaria: ['15 g.', '60%', '25 mg.'],
      sodio: ['11 mg.', '0%', '0 mg.'],
    },
    id: 'porotos-colorados',
  },
  {
    title: 'porotos cranberry',
    subtitle: null,
    pictures: [PorotosCranberry, PorotosCranberryPackage],
    type: 'legumbres',
    description:
      'El producto es valorado por distintas características, entre ellas podemos destacar las más importantes: el poroto es de una riqueza formidable en lo que a aportes nutritivos se refiere. Es rico en proteínas, en almidón y en lípidos insaturados y carentes de colesterol. Del mismo modo el poroto es un buen aporte de fibra lo que ayuda a reducir los niveles de colesterol y calorías. El poroto es muy rico en Potasio, Calcio, Magnesio y Fósforo.',
    sinTacc: true,
    sinConservantes: true,
    sinLactosa: true,
    sinAzucar: true,
    nutritionalValues: {
      valorEnergetico: ['148 kcal = 619 kj', '7%', '246kcal = 1031 Kj'],
      carbohidratos: ['20 g.', '7%', '33 g.'],
      proteinas: ['15 g.', '20%', '25 g.'],
      grasasTotales: ['0,9 g.', '2%', '1,5 g.'],
      grasasSaturadas: ['0 g.', '0%', '0 g.'],
      grasasTrans: ['0 g.', '0%', '0 g.'],
      fibraAlimentaria: ['15 g.', '60%', '25 mg.'],
      sodio: ['11 mg.', '0%', '0 mg.'],
    },
    id: 'porotos-cranberry',
  },
  {
    title: 'maiz pisingallo',
    subtitle: null,
    pictures: [MaizPisingallo, MaizPisingalloPackage],
    type: 'legumbres',
    description:
      'El maíz pisingallo es un producto muy sano, especialmente el que se prepara en forma casera, ya que normalmente el que viene para microondas conlleva agregados que le incorpora grasas en exceso que no son recomendadas para una nutrición sana.',
    sinTacc: true,
    sinConservantes: true,
    sinLactosa: true,
    sinAzucar: true,
    nutritionalValues: {
      valorEnergetico: ['175 kcal = 732 kj', '9%', '350kcal = 1464 Kj'],
      carbohidratos: ['39 g.', '13%', '78 g.'],
      proteinas: ['4 g.', '5%', '8 g.'],
      grasasTotales: ['0,3 g.', '1%', '0,6 g.'],
      grasasSaturadas: ['0 g.', '0%', '0 g.'],
      grasasTrans: ['0 g.', '0%', '0 g.'],
      fibraAlimentaria: ['0,8 g.', '3%', '1,6 mg.'],
      sodio: ['44 mg.', '2%', '88 mg.'],
    },
    id: 'maiz-pisingallo',
  },
  {
    title: 'harina de arveja',
    subtitle: 'verde cruda',
    pictures: [HarinaVerdeCruda, HarinaVerdeCrudaPackage],
    type: 'derivados',
    description:
      'La harina de arveja no contiene gluten, ni colesterol. Permite bajar la glucemia ya que ayuda a mejorar la tolerancia a la misma. Al combinarla con harina de trigo se obtiene un producto completo, ya que la harina de trigo es rica en aminoácido metionina y la harina de arveja es rica en lisina. Da volumen y aumenta la expansión (permite incrementar el rendimiento de productos). Mejora la digestibilidad por su contenido de fibra.',
    sinTacc: true,
    sinConservantes: true,
    sinLactosa: true,
    sinAzucar: true,
    nutritionalValues: {
      valorEnergetico: ['175 kcal = 732 kj', '9%', '350kcal = 1464 Kj'],
      carbohidratos: ['39 g.', '13%', '78 g.'],
      proteinas: ['4 g.', '5%', '8 g.'],
      grasasTotales: ['0,3 g.', '1%', '0,6 g.'],
      grasasSaturadas: ['0 g.', '0%', '0 g.'],
      grasasTrans: ['0 g.', '0%', '0 g.'],
      fibraAlimentaria: ['0,8 g.', '3%', '1,6 mg.'],
      sodio: ['44 mg.', '2%', '88 mg.'],
    },
    id: 'harina-arvejas-verde-cruda',
  },
  {
    title: 'harina de arveja',
    subtitle: 'verde precocida',
    pictures: [HarinaVerdePrecocida, HarinaVerdePrecocidaPackage],
    type: 'derivados',
    description:
      'La harina de arveja no contiene gluten, ni colesterol. Permite bajar la glucemia ya que ayuda a mejorar la tolerancia a la misma. Al combinarla con harina de trigo se obtiene un producto completo, ya que la harina de trigo es rica en aminoácido metionina y la harina de arveja es rica en lisina. Da volumen y aumenta la expansión (permite incrementar el rendimiento de productos). Mejora la digestibilidad por su contenido de fibra.',
    sinTacc: true,
    sinConservantes: true,
    sinLactosa: true,
    sinAzucar: true,
    nutritionalValues: {
      valorEnergetico: ['175 kcal = 732 kj', '9%', '350kcal = 1464 Kj'],
      carbohidratos: ['39 g.', '13%', '78 g.'],
      proteinas: ['4 g.', '5%', '8 g.'],
      grasasTotales: ['0,3 g.', '1%', '0,6 g.'],
      grasasSaturadas: ['0 g.', '0%', '0 g.'],
      grasasTrans: ['0 g.', '0%', '0 g.'],
      fibraAlimentaria: ['0,8 g.', '3%', '1,6 mg.'],
      sodio: ['44 mg.', '2%', '88 mg.'],
    },
    id: 'harina-arvejas-verde-precocida',
  },
  {
    title: 'harina de arveja',
    subtitle: 'amarilla precocida',
    pictures: [HarinaAmarillaPrecocida, HarinaAmarillaPrecocidaPackage],
    type: 'derivados',
    description:
      'La harina de arveja no contiene gluten, ni colesterol. Permite bajar la glucemia ya que ayuda a mejorar la tolerancia a la misma. Al combinarla con harina de trigo se obtiene un producto completo, ya que la harina de trigo es rica en aminoácido metionina y la harina de arveja es rica en lisina. Da volumen y aumenta la expansión (permite incrementar el rendimiento de productos). Mejora la digestibilidad por su contenido de fibra.',
    sinTacc: true,
    sinConservantes: true,
    sinLactosa: true,
    sinAzucar: true,
    nutritionalValues: {
      valorEnergetico: ['175 kcal = 732 kj', '9%', '350kcal = 1464 Kj'],
      carbohidratos: ['39 g.', '13%', '78 g.'],
      proteinas: ['4 g.', '5%', '8 g.'],
      grasasTotales: ['0,3 g.', '1%', '0,6 g.'],
      grasasSaturadas: ['0 g.', '0%', '0 g.'],
      grasasTrans: ['0 g.', '0%', '0 g.'],
      fibraAlimentaria: ['0,8 g.', '3%', '1,6 mg.'],
      sodio: ['44 mg.', '2%', '88 mg.'],
    },
    id: 'harina-arvejas-amarilla-precocida',
  },
  {
    title: 'harina de lentejas',
    subtitle: null,
    pictures: [HarinaLentejas, HarinaLentejasPackage],
    type: 'derivados',
    description:
      'La harina de arveja no contiene gluten, ni colesterol. Permite bajar la glucemia ya que ayuda a mejorar la tolerancia a la misma. Al combinarla con harina de trigo se obtiene un producto completo, ya que la harina de trigo es rica en aminoácido metionina y la harina de arveja es rica en lisina. Da volumen y aumenta la expansión (permite incrementar el rendimiento de productos). Mejora la digestibilidad por su contenido de fibra.',
    sinTacc: true,
    sinConservantes: true,
    sinLactosa: true,
    sinAzucar: true,
    nutritionalValues: {
      valorEnergetico: ['175 kcal = 732 kj', '9%', '350kcal = 1464 Kj'],
      carbohidratos: ['39 g.', '13%', '78 g.'],
      proteinas: ['4 g.', '5%', '8 g.'],
      grasasTotales: ['0,3 g.', '1%', '0,6 g.'],
      grasasSaturadas: ['0 g.', '0%', '0 g.'],
      grasasTrans: ['0 g.', '0%', '0 g.'],
      fibraAlimentaria: ['0,8 g.', '3%', '1,6 mg.'],
      sodio: ['44 mg.', '2%', '88 mg.'],
    },
    id: 'harina-lentejas',
  },
  {
    title: 'harina de garbanzos',
    subtitle: null,
    pictures: [HarinaGarbanzos, HarinaGarbanzosPackage],
    type: 'derivados',
    description:
      'La harina de arveja no contiene gluten, ni colesterol. Permite bajar la glucemia ya que ayuda a mejorar la tolerancia a la misma. Al combinarla con harina de trigo se obtiene un producto completo, ya que la harina de trigo es rica en aminoácido metionina y la harina de arveja es rica en lisina. Da volumen y aumenta la expansión (permite incrementar el rendimiento de productos). Mejora la digestibilidad por su contenido de fibra.',
    sinTacc: true,
    sinConservantes: true,
    sinLactosa: true,
    sinAzucar: true,
    nutritionalValues: {
      valorEnergetico: ['175 kcal = 732 kj', '9%', '350kcal = 1464 Kj'],
      carbohidratos: ['39 g.', '13%', '78 g.'],
      proteinas: ['4 g.', '5%', '8 g.'],
      grasasTotales: ['0,3 g.', '1%', '0,6 g.'],
      grasasSaturadas: ['0 g.', '0%', '0 g.'],
      grasasTrans: ['0 g.', '0%', '0 g.'],
      fibraAlimentaria: ['0,8 g.', '3%', '1,6 mg.'],
      sodio: ['44 mg.', '2%', '88 mg.'],
    },
    id: 'harina-garbanzos',
  },
  {
    title: 'texturizado de arveja verde',
    subtitle: null,
    pictures: [TexturizadoArvejaVerde, NoPackage],
    type: 'derivados',
    description:
      'La harina de arveja no contiene gluten, ni colesterol. Permite bajar la glucemia ya que ayuda a mejorar la tolerancia a la misma. Al combinarla con harina de trigo se obtiene un producto completo, ya que la harina de trigo es rica en aminoácido metionina y la harina de arveja es rica en lisina. Da volumen y aumenta la expansión (permite incrementar el rendimiento de productos). Mejora la digestibilidad por su contenido de fibra.',
    sinTacc: true,
    sinConservantes: true,
    sinLactosa: true,
    sinAzucar: true,
    nutritionalValues: {
      valorEnergetico: ['175 kcal = 732 kj', '9%', '350kcal = 1464 Kj'],
      carbohidratos: ['39 g.', '13%', '78 g.'],
      proteinas: ['4 g.', '5%', '8 g.'],
      grasasTotales: ['0,3 g.', '1%', '0,6 g.'],
      grasasSaturadas: ['0 g.', '0%', '0 g.'],
      grasasTrans: ['0 g.', '0%', '0 g.'],
      fibraAlimentaria: ['0,8 g.', '3%', '1,6 mg.'],
      sodio: ['44 mg.', '2%', '88 mg.'],
    },
    id: 'texturizado-arveja-verde',
  },
  {
    title: 'texturizado de arveja amarilla',
    subtitle: null,
    pictures: [TexturizadoArvejaAmarilla, NoPackage],
    type: 'derivados',
    description:
      'La harina de arveja no contiene gluten, ni colesterol. Permite bajar la glucemia ya que ayuda a mejorar la tolerancia a la misma. Al combinarla con harina de trigo se obtiene un producto completo, ya que la harina de trigo es rica en aminoácido metionina y la harina de arveja es rica en lisina. Da volumen y aumenta la expansión (permite incrementar el rendimiento de productos). Mejora la digestibilidad por su contenido de fibra.',
    sinTacc: true,
    sinConservantes: true,
    sinLactosa: true,
    sinAzucar: true,
    nutritionalValues: {
      valorEnergetico: ['175 kcal = 732 kj', '9%', '350kcal = 1464 Kj'],
      carbohidratos: ['39 g.', '13%', '78 g.'],
      proteinas: ['4 g.', '5%', '8 g.'],
      grasasTotales: ['0,3 g.', '1%', '0,6 g.'],
      grasasSaturadas: ['0 g.', '0%', '0 g.'],
      grasasTrans: ['0 g.', '0%', '0 g.'],
      fibraAlimentaria: ['0,8 g.', '3%', '1,6 mg.'],
      sodio: ['44 mg.', '2%', '88 mg.'],
    },
    id: 'texturizado-arveja-amarilla',
  },
];

export default productData;
