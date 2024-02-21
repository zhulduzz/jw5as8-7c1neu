

export interface Product {
  id: number;
  link: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

export const products = [
  {
    id: 1,
    link: 'https://kaspi.kz/shop/p/uvlazhnitel-vozduha-maxmoll-h2o-humid-300-belyi-102027263/?c=750000000',
    name: 'Увлажнитель воздуха Maxmoll H2O Humid-300 белый',
    price: 1448,
    description: 'Ультразвуковой настольный увлажнитель воздуха с заправочной емкостью для воды в объеме 300 мл. Корпус прибора выполнен из ABS пластика черного цвета. Корпус прибора и внутренняя емкость легко моются и дезинфицируются с помощью бытовых моющих средств. Увлажнитель питается от порта USB, номинальный потребляемый ток 250 – 350 мА. Прибор оборудован таймером на 4 или 6 часов работы.',
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hd0/hc4/64156819783710.jpg?format=gallery-medium'
  },
  {
    id: 2,
    link: 'https://kaspi.kz/shop/p/nastol-naja-lampa-csx515-led-7-vt-plastik-107544331/?c=750000000',
    name: 'Настольная лампа CSX515 LED, 7 Вт, пластик',
    price: 4989,
    description: 'Удобный легкий светодиодный настольный светильник подойдет в использовании как для школьного так и для любого более взрослого возраста. Удобно переносить в различные места дома. Имеет 3 режима освещения, удобно регулировать при чтении книг, сенсорное управление. Дополнительные опции: установка времени, температура в комнате, дата. Светильник излучает мягкий, без мерцания, анти-синий регулируемый оттенок. Светильник с двойной головкой, держатель лампы может быть сложен, разворачивается на 180 градусов влево и вправо, И угол поворота 160 градусов вверх и вниз обеспечивает вам больший диапазон освещения и угол. Длительный срок службы батареи — 2000 мА · ч литиевая батарея, несколько способов зарядки, вы можете зарядить светильник через розетки, компьютеры и банки питания. Эта креативная портативная настольная лампа имеет небольшой размер, легко носить с собой и не занимает много места. Как в рюкзаке, так и в багаже, вы можете взять с собой этот светильник для работы и чтения.',
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hbf/h24/65627737522206.jpg?format=gallery-large'
  },
  {
    id: 3,
    link: 'https://kaspi.kz/shop/p/pechen-e-milka-choco-cow-shokoladnoe-200-g-100971310/?c=750000000',
    name: 'Печенье Milka Choco Cow шоколадное 200 г',
    price: 599,
    description: 'Печенье Milka с молочным шоколадом. Подходит и для того, чтобы порадовать самих себя сытным и вкусным лакомством, и для того, чтобы угостить друзей, которые по достоинству оценят ваш выбор.',
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h76/hab/84983106371614.jpg?format=gallery-medium'
  },
  {
    id: 4,
    link: 'https://kaspi.kz/shop/p/xiaomi-mi-dual-mode-wireless-mouse-silent-edition-belyi-101190787/?c=750000000',
    name: 'Мышь Xiaomi Mi Dual Mode Wireless Mouse Silent Edition белый',
    price: 4510 ,
    description: 'Беспроводное соединение с Bluetooth или крошечный USB-приемник 2.4 ГГц на нижней крышке мыши.Снижение шума при щелчках помогает вам наслаждаться спокойной обстановкой для вас и ваших соседей. Тихое скольжение и прокрутка с гладким резиновым колесом.Наслаждайтесь плавным управлением курсором, точным отслеживанием и легким выбором текста с разрешением 1300 точек на дюйм.Элегантный изгиб корпуса естественным образом регулируется на ладони. Легкий и компактный по размеру, он прост в использовании и транспортировке. Гладкая УФ-краска и точечная текстура на боковой поверхности обеспечивают больший комфорт при ношении в течение всего дня.',
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h81/h97/64008869511198.jpg?format=gallery-medium'
  }, 
  {
    id: 5,
    link: 'https://kaspi.kz/shop/p/splat-zubnaja-pasta-biokal-tsii-100-ml-100194771/?c=750000000',
    name: 'SPLAT зубная паста Биокальций 100 мл',
    price: 799,
    description: 'Зубная паста Биокальций разработана SPLAT Professional для восстановления эмали и снижения чувствительности зубов. Она насыщает зубы природным кальцием, укрепляя их и восстанавливая поврежденные участки. Гидроксиапатит действует идентично пломбе, замуровывая микротрещины на поверхности эмали. Натуральный фермент папаин в сочетании с компонентом Polydon препятствуют образованию налета и зубного камня. Инновационная система Sp.White System безопасно отбеливает зубы.',
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hbb/hd5/63847124205598.jpg?format=gallery-medium'
  },
  {
    id: 6,
    link: 'https://kaspi.kz/shop/p/felix-kusochki-v-zhele-forel-75-g-1-sht-107965332/?c=750000000',
    name: 'Корм Felix кусочки в желе форель 75 г 1 шт',
    price: 166,
    description: 'Каждый котик желает наслаждаться совершенно особенным кормом, у которого будет такой аппетитный вид и аромат, словно Вы приготовили его сами. Каждый пакетик корма для взрослых кошек аппетитные кусочки содержит нежные кусочки в сочном желе - вкуснятину, от которой кота за уши не оттащишь! Эксперты Purina, разрабатывая влажные корма для домашних любимцев, создали корм для взрослых кошек Felix аппетитные кусочки - специально для вашего любителя вкуснятины. Влажный корм для кошек Felix аппетитные кусочки - полнорационный, содержит все необходимое для здоровой активной долгой жизни.',
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/he9/h9a/80548098342942.jpg?format=gallery-medium'
  },
  {
    id: 7,
    link: 'https://kaspi.kz/shop/p/kentmere-pan-400-36-sht-114393871/?c=750000000',
    name: 'Фотопленка Kentmere PAN 400 36 шт',
    price: 7500,
    description: 'тип пленки: черно-белая,количество кадров: 36,увствительность (ISO): 400',
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/ha7/hb0/84467338706974.jpg?format=gallery-medium'
  },
  {
    id: 8,
    link: 'https://kaspi.kz/shop/p/denari-metall-108x170-sm-chernyi-107559936/?c=750000000',
    name: 'DENARI, металл, 108x170 см, черный',
    price: 12456,
    description: 'Черная напольная вешалка с органайзером для вещей в комплекте идеально впишется в пространство вашего дома, дачи, квартиры, комнаты, гардероба, зала, кабинета и даже офиса и бани. Открытый шкаф стойка быстрой сборки предназначен для хранения сумок, обуви, шляп, пиджаков, рубашек, платьев, брюк, шарфов и других вещей. Стойка для одежды позволит быстро навести порядок в прихожей или аккуратно разместить вещи в спальне, это отличная гардеробная система. Также имеется 6 функциональных полок для вещей или обуви из нетканого материала, который легко поддается мойке и не промокает. Прилагается инструкция сборки на русском и английском языке.Так же каждому покупателю высылается видеоинструкция, чтобы легче было собрать вешалку. Органайзер может быть разного цвета.Модель и размер органайзера могут отличаться.',
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h42/haf/84036579295262.png?format=gallery-medium'
  },
  {
    id: 9,
    link: 'https://kaspi.kz/shop/p/shtora-tsvet-svechenija-teplyi-belyi-3-m-108102850/?c=750000000',
    name: 'Электрогирлянда Штора цвет свечения теплый белый 3 м',
    price: 1788,
    description: 'Новогодняя гирлянда-штора это украшение, состоящее из набора маленьких светодиодных огоньков, которые соединены между собой и могут быть зацеплены за края окна, шкафа или другой поверхности. Они создают эффект мягкого свечения и добавляют праздничную атмосферу в помещение.',
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h73/h70/84677303369758.jpg?format=gallery-medium'
  },
  {
    id: 10,
    link: 'https://kaspi.kz/shop/p/yoga-mat-170x60x0-6-sm-183x60x0-6-sm-rozovyi-100710438/?c=750000000',
    name: 'Коврик Yoga Mat 170x60x0.6 см 183x60x0.6 см розовый',
    price: 2498,
    description: 'Коврик для фитнеса и йоги с двойным слоем - это лучший помощник при занятиях на полу и жестких поверхностях. Двойной коврик для йоги поможет избежать травм и дискомфорта в спине и поясницы, защитит ваши колени и локти во время выполнения упражнений.',
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/ha9/hea/64080404807710.jpg?format=gallery-medium'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/