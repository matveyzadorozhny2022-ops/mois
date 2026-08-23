(()=>{
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const icon=(name,size=20)=>{
 const paths={
  bag:'<path d="M6 8h12l-1 11H7L6 8Z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/>',
  box:'<path d="M4 7.5 12 3l8 4.5V17l-8 4-8-4V7.5Z"/><path d="m4.5 7.8 7.5 4 7.5-4M12 12v9"/>',
  message:'<path d="M5 17.5 3.5 21l4.2-1.8A9 9 0 1 0 5 17.5Z"/>',
  hanger:'<path d="M12 8.3a2.7 2.7 0 1 0-2.7-2.7"/><path d="m12 8.3 8.2 6.2a1.5 1.5 0 0 1-.9 2.7H4.7a1.5 1.5 0 0 1-.9-2.7L12 8.3Z"/>',
  globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/>',
  settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21h-4v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3v-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.5V3h4v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.5 1h.1v4h-.1a1.7 1.7 0 0 0-1.5 1Z"/>',
  chevron:'<path d="m9 18 6-6-6-6"/>',
  spark:'<path d="M12 2.8 13.7 8l5.2 1.7-5.2 1.7-1.7 5.2-1.7-5.2-5.2-1.7L10.3 8 12 2.8Z"/><path d="m18.5 16 .7 2.1 2.1.7-2.1.7-.7 2.1-.7-2.1-2.1-.7 2.1-.7.7-2.1Z"/>',
  user:'<circle cx="12" cy="8" r="4"/><path d="M4.5 21a7.5 7.5 0 0 1 15 0"/>',
  home:'<path d="m3 11 9-8 9 8"/><path d="M5.5 9.5V21h13V9.5M9.5 21v-6h5v6"/>',
  friends:'<circle cx="9" cy="8" r="3.2"/><circle cx="17" cy="9.2" r="2.6"/><path d="M3.5 20a5.5 5.5 0 0 1 11 0M14 14.2a4.6 4.6 0 0 1 6.5 4.2"/>',
  copy:'<rect x="8" y="8" width="11" height="11" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/>',
  arrow:'<path d="M5 12h14M14 7l5 5-5 5"/>',
  close:'<path d="m6 6 12 12M18 6 6 18"/>',
  back:'<path d="m15 18-6-6 6-6"/>',
  heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"/>'
 };
 return `<svg class="svg-icon" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name]||paths.spark}</svg>`
};
const KEY='mois_shop_v2';

const I18N={
ru:{
brandSub:'одежда · аксессуары · детали',ordersTop:'Мои заказы',
heroKicker:'Новая эстетика · Minsk',
heroTitle:'Mois Shop — стиль, который начинается с тебя',
heroText:'Коллекция вещей и деталей для образов, которые хочется носить каждый день. Спокойно, смело, по-своему.',
heroMore:'Твоя новая глава начинается здесь',forYou:'Для тебя',products:'товаров',all:'Все',inStock:'В наличии',
friendsSub:'Mois Circle',friendsTitle:'Для друзей — больше',refLabel:'Твоя реферальная ссылка',refTitle:'Делись стилем. Получай привилегии.',copy:'Копировать',
perkTitle:'Каждый друг открывает скидку',perkText:'Приглашай близких в Mois Shop — за каждого нового друга получай 5% на следующий заказ.',friendCount:'Приглашено друзей',demoStat:'Демо-статистика',
profileSub:'Твоё пространство',profileTitle:'Профиль',refs:'рефералов',orders:'заказов',splashQuote:'Красота начинается с тебя',splashCreated:'создано',friendsLead:'Твоя персональная программа Mois Circle: приглашения, привилегии и накопительный эффект.',friendDiscountLabel:'скидка за друга',nextOrderLabel:'на следующий заказ',howTitle:'Три шага к привилегиям',stepOne:'Скопируй персональную ссылку',stepTwo:'Отправь её другу',stepThree:'Получай скидку после его входа',profileLead:'Заказы, бонусы и всё важное — в одном спокойном пространстве.',profileNoteText:'Сохраняй любимое, следи за заказами и управляй своим магазином без лишних экранов.',
cart:'Корзина',cartSub:'Товары, которые ты сохранил',myOrders:'Мои заказы',myOrdersSub:'История оформленных заказов',
support:'Служба поддержки',purchaseChat:'Чат для покупки вещей',language:'Язык',languageSub:'Русский / Беларуская',
admin:'Админ-панель',adminSub:'Управление магазином',aboutProduct:'О товаре',addCart:'В корзину',buyNow:'Купить сейчас',
added:'Добавлено в корзину',emptyCart:'Корзина пока пустая',items:'товаров',total:'Итого',checkoutCart:'Оформить корзину',
checkout:'Оформление заказа',checkoutSub:'Без оплаты картой — детали подтверждает менеджер',size:'Размер',quantity:'Количество',delivery:'Доставка',promo:'Промокод',
promoHint:'Демо-промокод: MOIS5',apply:'Применить',comment:'Комментарий',commentPh:'Например: связаться после 18:00',goods:'Товары',
free:'Бесплатно',discount:'Скидка',placeOrder:'Оформить заказ',promoOk:'Промокод применён: скидка 5%',promoBad:'Промокод не найден',
orderDone:'Ваш заказ оформлен',orderDoneText:'Для подтверждения деталей и оплаты напишите менеджеру:',writeManager:'Написать менеджеру',close:'Закрыть',
ordersEmpty:'У вас пока нет оформленных заказов.',orderStatus:'Оформлен',
deliveryTitle:'Доставка Mois Shop',deliveryIntro:'Мы доставляем по Минску и по всей Беларуси. Выбери удобный вариант при оформлении заказа.',
minsk:'Минск — доставка к метро',minskText:'Выберите любую станцию одной из трёх действующих линий. Стоимость доставки к выбранной станции — 5 BYN.',
post:'Беларусь — Белпочта',postText:'Отправляем в города и другие населённые пункты Беларуси Белпочтой наложенным платежом. Стоимость пересылки рассчитывается по тарифу Белпочты.',
postCities:'Доступно, например:',metroBlue:'Московская линия',metroRed:'Автозаводская линия',metroGreen:'Зеленолужская линия',
aboutTitle:'О Mois Shop',aboutLead:'Небольшой магазин с большим вниманием к деталям.',
aboutText:'Mois Shop создали София и Матвей. Идея простая: собрать в одном месте одежду, украшения и аксессуары, которые легко сочетать между собой, а покупку сделать понятной и личной — без сложных форм и лишних шагов.',
sofia:'София',sofiaText:'Отвечает за стиль, подбор вещей и визуальную сторону магазина.',matvey:'Матвей',matveyText:'Отвечает за организацию, заказы, доставку и развитие магазина.',
aboutFoot:'Мы начинаем с Минска, но доставляем заказы по всей Беларуси.',photoCredit:'Mois Shop · Minsk · Беларусь',
chooseLanguage:'Выберите язык интерфейса',russian:'Русский',belarusian:'Беларуская',
adminOnly:'Локальная тестовая панель',adminTitle:'Админ-панель',overview:'Обзор',productsTab:'Товары',ordersTab:'Заказы',settings:'Настройки',
productsCount:'товаров',ordersCount:'заказов',orderSum:'сумма заказов',localNotice:'Тестовая версия: данные хранятся только в localStorage этого браузера. Для боевого Telegram Web App понадобится backend, база данных и серверная проверка initData.',
productsManage:'Товары',productsManageSub:'Добавляй, редактируй и удаляй',addProduct:'+ Товар',edit:'Изменить',noOrders:'Заказов пока нет.',
shopName:'Название магазина',manager:'Username менеджера',supportUser:'Username поддержки',referral:'Реферальная ссылка',discountFriend:'Скидка за друга, %',interfaceLanguage:'Язык интерфейса',save:'Сохранить',reset:'Сбросить демо-данные',
newProduct:'Новый товар',editProduct:'Редактирование товара',name:'Название',price:'Цена, BYN',category:'Категория',stock:'Остаток',sizes:'Размеры через запятую',description:'Описание',photos:'Фото — URL, по одному в строке',saveProduct:'Сохранить товар',deleteProduct:'Удалить товар',
saved:'Сохранено',productSaved:'Товар сохранён',productDeleted:'Товар удалён',statusUpdated:'Статус обновлён',resetAsk:'Сбросить все локальные данные магазина?',resetDone:'Демо-данные сброшены',
deliveryCost:'Доставка',postalTariff:'по тарифу Белпочты',postalCOD:'наложенный платёж',selectDelivery:'Выберите способ доставки',postalCity:'Город / населённый пункт',postalCityPh:'Введите город, если выбрали «Другой»',
cartUpdated:'Количество обновлено',languageSaved:'Язык изменён'
},
be:{
brandSub:'адзенне · аксэсуары · дэталі',ordersTop:'Мае заказы',
heroKicker:'Новая эстэтыка · Minsk',
heroTitle:'Mois Shop — стыль, які пачынаецца з цябе',
heroText:'Калекцыя рэчаў і дэталяў для вобразаў, якія хочацца насіць кожны дзень. Спакойна, смела, па-свойму.',
heroMore:'Твая новая глава пачынаецца тут',forYou:'Для цябе',products:'тавараў',all:'Усе',inStock:'У наяўнасці',
friendsSub:'Mois Circle',friendsTitle:'Для сяброў — больш',refLabel:'Твая рэферальная спасылка',refTitle:'Дзяліся стылем. Атрымлівай прывілеі.',copy:'Капіяваць',
perkTitle:'Кожны сябар адкрывае зніжку',perkText:'Запрашай блізкіх у Mois Shop — за кожнага новага сябра атрымлівай 5% на наступны заказ.',friendCount:'Запрошана сяброў',demoStat:'Дэма-статыстыка',
profileSub:'Твая прастора',profileTitle:'Профіль',refs:'рэфералаў',orders:'заказаў',splashQuote:'Прыгажосць пачынаецца з цябе',splashCreated:'створана',friendsLead:'Твая персанальная праграма Mois Circle: запрашэнні, прывілеі і назапашвальны эфект.',friendDiscountLabel:'зніжка за сябра',nextOrderLabel:'на наступны заказ',howTitle:'Тры крокі да прывілеяў',stepOne:'Скапіруй персанальную спасылку',stepTwo:'Адпраў яе сябру',stepThree:'Атрымлівай зніжку пасля яго ўваходу',profileLead:'Заказы, бонусы і ўсё важнае — у адной спакойнай прасторы.',profileNoteText:'Захоўвай любімае, сачы за заказамі і кіруй сваім магазінам без лішніх экранаў.',
cart:'Кошык',cartSub:'Тавары, якія ты захаваў',myOrders:'Мае заказы',myOrdersSub:'Гісторыя аформленых заказаў',
support:'Служба падтрымкі',purchaseChat:'Чат для пакупкі рэчаў',language:'Мова',languageSub:'Русский / Беларуская',
admin:'Адмін-панэль',adminSub:'Кіраванне крамай',aboutProduct:'Пра тавар',addCart:'У кошык',buyNow:'Купіць зараз',
added:'Дададзена ў кошык',emptyCart:'Кошык пакуль пусты',items:'тавараў',total:'Разам',checkoutCart:'Аформіць кошык',
checkout:'Афармленне заказу',checkoutSub:'Без аплаты картай — дэталі пацвярджае менеджар',size:'Памер',quantity:'Колькасць',delivery:'Дастаўка',promo:'Прамакод',
promoHint:'Дэма-прамакод: MOIS5',apply:'Ужыць',comment:'Каментар',commentPh:'Напрыклад: звязацца пасля 18:00',goods:'Тавары',
free:'Бясплатна',discount:'Зніжка',placeOrder:'Аформіць заказ',promoOk:'Прамакод ужыты: зніжка 5%',promoBad:'Прамакод не знойдзены',
orderDone:'Ваш заказ аформлены',orderDoneText:'Для пацвярджэння дэталяў і аплаты напішыце менеджару:',writeManager:'Напісаць менеджару',close:'Закрыць',
ordersEmpty:'У вас пакуль няма аформленых заказаў.',orderStatus:'Аформлены',
deliveryTitle:'Дастаўка Mois Shop',deliveryIntro:'Мы дастаўляем па Мінску і па ўсёй Беларусі. Абярыце зручны варыянт пры афармленні заказу.',
minsk:'Мінск — дастаўка да метро',minskText:'Абярыце любую станцыю адной з трох дзеючых ліній. Кошт дастаўкі да абранай станцыі — 5 BYN.',
post:'Беларусь — Белпошта',postText:'Адпраўляем у гарады і іншыя населеныя пункты Беларусі Белпоштай накладзеным плацяжом. Кошт перасылкі разлічваецца па тарыфе Белпошты.',
postCities:'Даступна, напрыклад:',metroBlue:'Маскоўская лінія',metroRed:'Аўтазаводская лінія',metroGreen:'Зеленалужская лінія',
aboutTitle:'Пра Mois Shop',aboutLead:'Невялікая крама з вялікай увагай да дэталяў.',
aboutText:'Mois Shop стварылі Софія і Мацвей. Ідэя простая: сабраць у адным месцы адзенне, упрыгожанні і аксэсуары, якія лёгка спалучаць, а пакупку зрабіць зразумелай і асабістай — без складаных формаў і лішніх крокаў.',
sofia:'Софія',sofiaText:'Адказвае за стыль, падбор рэчаў і візуальную частку крамы.',matvey:'Мацвей',matveyText:'Адказвае за арганізацыю, заказы, дастаўку і развіццё крамы.',
aboutFoot:'Мы пачынаем з Мінска, але дастаўляем заказы па ўсёй Беларусі.',photoCredit:'Mois Shop · Minsk · Беларусь',
chooseLanguage:'Абярыце мову інтэрфейсу',russian:'Русский',belarusian:'Беларуская',
adminOnly:'Лакальная тэставая панэль',adminTitle:'Адмін-панэль',overview:'Агляд',productsTab:'Тавары',ordersTab:'Заказы',settings:'Налады',
productsCount:'тавараў',ordersCount:'заказаў',orderSum:'сума заказаў',localNotice:'Тэставая версія: даныя захоўваюцца толькі ў localStorage гэтага браўзера. Для баявога Telegram Web App спатрэбіцца backend, база даных і серверная праверка initData.',
productsManage:'Тавары',productsManageSub:'Дадавай, рэдагуй і выдаляй',addProduct:'+ Тавар',edit:'Змяніць',noOrders:'Заказаў пакуль няма.',
shopName:'Назва крамы',manager:'Username менеджара',supportUser:'Username падтрымкі',referral:'Рэферальная спасылка',discountFriend:'Зніжка за сябра, %',interfaceLanguage:'Мова інтэрфейсу',save:'Захаваць',reset:'Скінуць дэма-даныя',
newProduct:'Новы тавар',editProduct:'Рэдагаванне тавару',name:'Назва',price:'Кошт, BYN',category:'Катэгорыя',stock:'Рэштка',sizes:'Памеры праз коску',description:'Апісанне',photos:'Фота — URL, па адным у радку',saveProduct:'Захаваць тавар',deleteProduct:'Выдаліць тавар',
saved:'Захавана',productSaved:'Тавар захаваны',productDeleted:'Тавар выдалены',statusUpdated:'Статус абноўлены',resetAsk:'Скінуць усе лакальныя даныя крамы?',resetDone:'Дэма-даныя скінуты',
deliveryCost:'Дастаўка',postalTariff:'па тарыфе Белпошты',postalCOD:'накладзены плацёж',selectDelivery:'Абярыце спосаб дастаўкі',postalCity:'Горад / населены пункт',postalCityPh:'Увядзіце горад, калі абралі «Іншы»',
cartUpdated:'Колькасць абноўлена',languageSaved:'Мова зменена'
}
};

const metroLines=[
 {id:'blue',key:'metroBlue',stations:[
  ['Уручье','Уручча'],['Борисовский тракт','Барысаўскі тракт'],['Восток','Усход'],['Московская','Маскоўская'],['Парк Челюскинцев','Парк Чалюскінцаў'],
  ['Академия наук','Акадэмія навук'],['Площадь Якуба Коласа','Плошча Якуба Коласа'],['Площадь Победы','Плошча Перамогі'],['Октябрьская','Кастрычніцкая'],
  ['Площадь Ленина','Плошча Леніна'],['Институт культуры','Інстытут культуры'],['Грушевка','Грушаўка'],['Михалово','Міхалова'],['Петровщина','Пятроўшчына'],['Малиновка','Малінаўка']
 ]},
 {id:'red',key:'metroRed',stations:[
  ['Каменная Горка','Каменная Горка'],['Кунцевщина','Кунцаўшчына'],['Спортивная','Спартыўная'],['Пушкинская','Пушкінская'],['Молодёжная','Маладзёжная'],
  ['Фрунзенская','Фрунзенская'],['Немига','Няміга'],['Купаловская','Купалаўская'],['Первомайская','Першамайская'],['Пролетарская','Пралетарская'],
  ['Тракторный завод','Трактарны завод'],['Партизанская','Партызанская'],['Автозаводская','Аўтазаводская'],['Могилёвская','Магілёўская']
 ]},
 {id:'green',key:'metroGreen',stations:[
  ['Юбилейная площадь','Юбілейная плошча'],['Площадь Франтишка Богушевича','Плошча Францішка Багушэвіча'],['Вокзальная','Вакзальная'],['Ковальская Слобода','Кавальская Слабада'],
  ['Аэродромная','Аэрадромная'],['Неморшанский сад','Немаршанскі сад'],['Слуцкий Гостинец','Слуцкі Гасцінец']
 ]}
];
const postCities=[
 ['Брест','Брэст'],['Витебск','Віцебск'],['Гомель','Гомель'],['Гродно','Гродна'],['Могилёв','Магілёў'],['Барановичи','Баранавічы'],['Бобруйск','Бабруйск'],
 ['Борисов','Барысаў'],['Лида','Ліда'],['Пинск','Пінск'],['Орша','Орша'],['Мозырь','Мазыр'],['Солигорск','Салігорск'],['Новополоцк','Наваполацк'],
 ['Полоцк','Полацк'],['Молодечно','Маладзечна'],['Жодино','Жодзіна'],['Речица','Рэчыца'],['Светлогорск','Светлагорск'],['Слуцк','Слуцк'],['Другой город / населённый пункт','Іншы горад / населены пункт']
];

const svg=(label,a='#d9ccff',b='#f9f5ff')=>'data:image/svg+xml;charset=UTF-8,'+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="900" height="1100"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#g)"/><circle cx="690" cy="210" r="180" fill="rgba(255,255,255,.38)"/><circle cx="150" cy="870" r="220" fill="rgba(255,255,255,.27)"/><text x="50%" y="52%" text-anchor="middle" font-family="-apple-system,Segoe UI,Arial" font-size="54" font-weight="700" fill="#7659b8">${label}</text></svg>`);

const defaults={
 settings:{shopName:'Mois Shop',managerUsername:'@mois_shop_manager',supportUsername:'@mois_shop_support',referralBase:'https://t.me/your_bot?start=ref_10001',discountPercent:5,language:'ru'},
 user:{id:'10001',name:'Покупатель',username:'@username',avatar:'',referrals:3},
 products:[
  {id:'p1',name:'Голубой кардиган',price:89,category:'Одежда',description:'Мягкий кардиган свободного кроя. Подходит для повседневных образов.\n\nМатериал: хлопковая смесь.\nПосадка: свободная.\nУход: деликатная стирка.',sizes:['S','M','L'],stock:15,images:[svg('Кардиган','#cbb9ff','#f8f4ff'),svg('Кардиган · 2','#e4d9ff','#fff')]},
  {id:'p2',name:'Сумка Mini',price:72,category:'Аксессуары',description:'Компактная сумка для телефона, ключей и небольших вещей. Регулируемый ремешок и минималистичная фурнитура.',sizes:['One size'],stock:9,images:[svg('Сумка','#d9c6ff','#fff'),svg('Сумка · 2','#c8b3f5','#fff')]},
  {id:'p3',name:'Серьги Silver Drop',price:35,category:'Бижутерия',description:'Лёгкие серьги с лаконичной формой. Подойдут и на каждый день, и к вечернему образу.',sizes:['One size'],stock:24,images:[svg('Серьги','#eee8ff','#fff')]},
  {id:'p4',name:'Белая футболка Base',price:59,category:'Одежда',description:'Базовая плотная футболка с аккуратной посадкой.\n\nМатериал: 100% хлопок.\nПлотность: средняя.',sizes:['XS','S','M','L','XL'],stock:30,images:[svg('Футболка','#fbf9ff','#e5d9ff')]},
  {id:'p5',name:'Колье Sky',price:42,category:'Бижутерия',description:'Минималистичное колье с холодным оттенком металла. Регулируемая длина.',sizes:['One size'],stock:18,images:[svg('Колье','#d5c5ff','#fff')]},
  {id:'p6',name:'Очки Minimal',price:49,category:'Аксессуары',description:'Лёгкая оправа в минималистичном стиле. Универсальная форма.',sizes:['One size'],stock:12,images:[svg('Очки','#e3d8ff','#fff')]}
 ],
 cart:[],orders:[]
};
let state=load(),currentCategory='__all',currentProductId=null,checkoutDraft=null,adminTab='dashboard';
function clone(v){return JSON.parse(JSON.stringify(v))}
function load(){try{const s=JSON.parse(localStorage.getItem(KEY));if(s&&s.settings&&s.products){s.settings.language=s.settings.language||'ru';return s}}catch(e){}return clone(defaults)}
function save(render=true){localStorage.setItem(KEY,JSON.stringify(state));if(render)refresh()}
function lang(){return state.settings.language==='be'?'be':'ru'} function t(k){return I18N[lang()][k]??I18N.ru[k]??k}
function esc(s=''){return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]))}
function money(n){return new Intl.NumberFormat(lang()==='be'?'be-BY':'ru-BY',{minimumFractionDigits:2,maximumFractionDigits:2}).format(Number(n||0))+' BYN'}
function byId(id){return state.products.find(p=>p.id===id)}
function toast(x){const e=$('#toast');e.textContent=x;e.classList.add('show');clearTimeout(window.__to);window.__to=setTimeout(()=>e.classList.remove('show'),1700)}
function cartCount(){return state.cart.reduce((s,x)=>s+Number(x.qty||0),0)}
function cartTotal(){return state.cart.reduce((s,x)=>{const p=byId(x.productId);return s+(p?p.price*x.qty:0)},0)}
function localName(pair){return pair[lang()==='be'?1:0]}

function refresh(){
 document.documentElement.lang=lang()==='be'?'be':'ru'; document.title='Mois Shop';
 $('#splashHello').textContent='Mois Shop';$('#splashQuote').textContent=t('splashQuote');$('#splashCreated').textContent=t('splashCreated');
 $('#brandSub').textContent=t('brandSub');$('#ordersTopText').textContent=t('ordersTop');
 $('#heroKicker').textContent=t('heroKicker');$('#heroTitle').textContent=t('heroTitle');$('#heroText').textContent=t('heroText');$('#heroMore').textContent=t('heroMore');$('#forYouText').textContent=t('forYou');
 $('#friendsSub').textContent=t('friendsSub');$('#friendsTitle').textContent=t('friendsTitle');$('#friendsLead').textContent=t('friendsLead');$('#friendDiscountLabel').textContent=t('friendDiscountLabel');$('#nextOrderLabel').textContent=t('nextOrderLabel');$('#howTitle').textContent=t('howTitle');$('#stepOne').textContent=t('stepOne');$('#stepTwo').textContent=t('stepTwo');$('#stepThree').textContent=t('stepThree');$('#refLabel').textContent=t('refLabel');$('#refTitle').textContent=t('refTitle');$('#copyText').textContent=t('copy');$('#perkTitle').textContent=t('perkTitle');$('#perkText').textContent=t('perkText');$('#friendCountLabel').textContent=t('friendCount');$('#demoStat').textContent=t('demoStat');
 $('#profileSub').textContent=t('profileSub');$('#profileTitle').textContent=t('profileTitle');$('#profileLead').textContent=t('profileLead');$('#profileNoteText').textContent=t('profileNoteText');$('#refsLabel').textContent=t('refs');$('#ordersLabel').textContent=t('orders');
 $('#profileName').textContent=state.user.name;$('#profileUsername').textContent=state.user.username;$('#profileRefs').textContent=state.user.referrals||0;$('#profileOrders').textContent=state.orders.length;$('#friendCount').textContent=state.user.referrals||0;
 const av=$('#profileAvatar');av.innerHTML=state.user.avatar?`<img src="${esc(state.user.avatar)}">`:(state.user.name||'U').charAt(0).toUpperCase();
 $('#refLink').value=state.settings.referralBase.replace('10001',state.user.id);
 $('#aboutProductText').textContent=t('aboutProduct');$('#detailCartBtn').textContent=t('addCart');$('#detailBuyBtn').textContent=t('buyNow');
 $('#adminOnly').textContent=t('adminOnly');$('#adminTitle').textContent=t('adminTitle');$('#tabOverview').textContent=t('overview');$('#tabProducts').textContent=t('productsTab');$('#tabOrders').textContent=t('ordersTab');$('#tabSettings').textContent=t('settings');
 renderProfileMenu();renderCategories();renderProducts();
}
function renderProfileMenu(){
 $('#profileMenu').innerHTML=`
 <button class="menu-item" onclick="openCart()"><span class="mi">${icon('bag')}</span><span><b>${t('cart')}</b><span>${cartCount()} ${t('items')}</span></span><span class="chev">${icon('chevron',16)}</span></button>
 <button class="menu-item" onclick="openOrders()"><span class="mi">${icon('box')}</span><span><b>${t('myOrders')}</b><span>${t('myOrdersSub')}</span></span><span class="chev">${icon('chevron',16)}</span></button>
 <button class="menu-item" onclick="openSupport()"><span class="mi">${icon('message')}</span><span><b>${t('support')}</b><span>${esc(state.settings.supportUsername)}</span></span><span class="chev">${icon('chevron',16)}</span></button>
 <button class="menu-item" onclick="openChat()"><span class="mi">${icon('hanger')}</span><span><b>${t('purchaseChat')}</b><span>${esc(state.settings.managerUsername)}</span></span><span class="chev">${icon('chevron',16)}</span></button>
 <button class="menu-item" onclick="openLanguage()"><span class="mi">${icon('globe')}</span><span><b>${t('language')}</b><span>${t('languageSub')}</span></span><span class="chev">${icon('chevron',16)}</span></button>
 <button class="menu-item" onclick="openAdmin()"><span class="mi">${icon('settings')}</span><span><b>${t('admin')}</b><span>${t('adminSub')}</span></span><span class="chev">${icon('chevron',16)}</span></button>`;
}
function renderCategories(){
 const cats=[...new Set(state.products.map(p=>p.category).filter(Boolean))];
 const allLabel=t('all'); $('#categoryChips').innerHTML=`<button class="chip ${currentCategory==='__all'?'active':''}" data-cat="__all">${allLabel}</button>`+cats.map(c=>`<button class="chip ${currentCategory===c?'active':''}" data-cat="${esc(c)}">${esc(c)}</button>`).join('');
 $$('#categoryChips .chip').forEach(b=>b.onclick=()=>{currentCategory=b.dataset.cat;renderCategories();renderProducts()});
}
function renderProducts(){
 const list=currentCategory==='__all'?state.products:state.products.filter(p=>p.category===currentCategory);
 $('#productsCount').textContent=list.length+' '+t('products');
 $('#productGrid').innerHTML=list.map((p,i)=>`<article class="product-card reveal-item" style="--reveal-delay:${Math.min(i,8)*55}ms" data-id="${esc(p.id)}"><div class="pic"><img loading="lazy" src="${esc(p.images?.[0]||svg(p.name))}" alt="${esc(p.name)}"></div><span class="badge">${esc(p.category||'')}</span><div class="body"><div class="name">${esc(p.name)}</div><div class="price">${money(p.price)}</div><div class="meta">${t('inStock')}: ${Number(p.stock||0)}</div></div><button class="mini-add" aria-label="${t('addCart')}" data-add="${esc(p.id)}">+</button></article>`).join('');
 $$('#productGrid .product-card').forEach(c=>c.onclick=e=>{if(e.target.closest('[data-add]'))return;openProduct(c.dataset.id)});
 $$('[data-add]').forEach(b=>b.onclick=e=>{e.stopPropagation();addToCart(b.dataset.add);toast(t('added'))});
 requestAnimationFrame(observeProductCards);
}
function observeProductCards(){
 const cards=$$('.reveal-item:not(.is-visible)');
 if(!('IntersectionObserver' in window)){cards.forEach(c=>c.classList.add('is-visible'));return}
 const io=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');io.unobserve(entry.target)}})},{rootMargin:'0px 0px 80px 0px',threshold:.08});
 cards.forEach(c=>io.observe(c));
}
$$('.nav-btn').forEach(b=>b.onclick=()=>switchScreen(b.dataset.screen));
function switchScreen(n){$$('.screen').forEach(s=>s.classList.toggle('active',s.id==='screen-'+n));$$('.nav-btn').forEach(b=>b.classList.toggle('active',b.dataset.screen===n));window.scrollTo({top:0,behavior:'instant'})}

function openProduct(id){const p=byId(id);if(!p)return;currentProductId=id;$('#detailGallery').innerHTML=(p.images?.length?p.images:[svg(p.name)]).map(x=>`<img src="${esc(x)}">`).join('');$('#detailPrice').textContent=money(p.price);$('#detailName').textContent=p.name;$('#detailCategory').textContent=(p.category||'')+' · '+t('inStock')+' '+Number(p.stock||0);$('#detailDesc').textContent=p.description||'';$('#productView').classList.remove('hidden');document.body.style.overflow='hidden'}
window.closeProduct=()=>{$('#productView').classList.add('hidden');document.body.style.overflow=''};
window.addCurrentToCart=()=>{if(currentProductId){addToCart(currentProductId);toast(t('added'))}};
window.buyCurrentNow=()=>{if(currentProductId)startCheckout(currentProductId,false)};
function addToCart(id){const x=state.cart.find(i=>i.productId===id);if(x)x.qty+=1;else state.cart.push({productId:id,qty:1,size:null});save()}

function modal(inner){$('#modalRoot').innerHTML=`<div class="modal-backdrop" id="modalBackdrop"><div class="modal">${inner}</div></div>`;$('#modalBackdrop').onclick=e=>{if(e.target.id==='modalBackdrop')closeModal()};document.body.style.overflow='hidden'}
window.closeModal=()=>{$('#modalRoot').innerHTML='';if($('#productView').classList.contains('hidden')&&$('#adminScreen').classList.contains('hidden'))document.body.style.overflow=''};

window.openAbout=()=>modal(`<div class="close-row"><div><h3>${t('aboutTitle')}</h3><div class="small muted">${t('aboutLead')}</div></div><button class="icon-btn" onclick="closeModal()">×</button></div><p style="font-size:13px;line-height:1.65;color:#526d7b;margin:16px 0">${t('aboutText')}</p><div class="about-founders"><div class="founder"><div class="founder-icon">${icon('spark')}</div><b>${t('sofia')}</b><span>${t('sofiaText')}</span></div><div class="founder"><div class="founder-icon">${icon('box')}</div><b>${t('matvey')}</b><span>${t('matveyText')}</span></div></div><div class="panel" style="margin-top:12px"><b>${t('aboutFoot')}</b><div class="small muted" style="margin-top:7px">${t('photoCredit')}</div></div>`);

window.openDeliveryInfo=()=>{
 const lineHtml=metroLines.map(l=>`<div class="delivery-line"><div class="delivery-line-head">${t(l.key)} · 5 BYN</div><div class="delivery-stations">${l.stations.map(s=>localName(s)).join(' · ')}</div></div>`).join('');
 modal(`<div class="close-row"><div><h3>${t('deliveryTitle')}</h3><div class="small muted">${t('deliveryIntro')}</div></div><button class="icon-btn" onclick="closeModal()">×</button></div><div class="stack" style="margin-top:16px"><div class="panel"><b>${t('minsk')}</b><p class="small muted" style="line-height:1.55;margin:7px 0 0">${t('minskText')}</p></div>${lineHtml}<div class="panel"><b>${t('post')}</b><p class="small muted" style="line-height:1.55">${t('postText')}</p><div class="small" style="font-weight:800;margin-bottom:5px">${t('postCities')}</div>${postCities.slice(0,-1).map(c=>`<span class="info-pill">${localName(c)}</span>`).join('')}</div></div>`);
};

window.openLanguage=()=>modal(`<div class="close-row"><div><h3>${t('language')}</h3><div class="small muted">${t('chooseLanguage')}</div></div><button class="icon-btn" onclick="closeModal()">×</button></div><div class="stack" style="margin-top:16px"><button class="ghost-btn" onclick="setLanguage('ru')">RU · ${t('russian')}</button><button class="primary-btn" onclick="setLanguage('be')">BE · ${t('belarusian')}</button></div>`);
window.setLanguage=l=>{state.settings.language=l;save();closeModal();toast(t('languageSaved'))};

window.openCart=()=>{
 const rows=state.cart.map((x,i)=>({x,i,p:byId(x.productId)})).filter(z=>z.p);
 modal(`<div class="close-row"><div><h3>${t('cart')}</h3><div class="small muted">${cartCount()} ${t('items')}</div></div><button class="icon-btn" onclick="closeModal()">×</button></div><div class="stack" style="margin-top:15px">${rows.length?rows.map(({x,i,p})=>`<div class="cart-item"><img src="${esc(p.images?.[0]||svg(p.name))}"><div class="ci-main"><b>${esc(p.name)}</b><div class="small muted" style="margin-top:3px">${money(p.price)}</div><div class="qty"><button onclick="cartQty(${i},-1)">−</button><b>${x.qty}</b><button onclick="cartQty(${i},1)">+</button></div></div><button class="remove-btn" onclick="removeCart(${i})">✕</button></div>`).join(''):`<div class="empty">${t('emptyCart')}</div>`}</div>${rows.length?`<div class="panel" style="margin-top:14px"><div class="row space"><b>${t('total')}</b><b style="font-size:21px;color:#6f4bb6">${money(cartTotal())}</b></div><button class="primary-btn" style="width:100%;margin-top:11px" onclick="startCheckout(null,true)">${t('checkoutCart')}</button></div>`:''}`);
};
window.cartQty=(i,d)=>{if(!state.cart[i])return;state.cart[i].qty=Math.max(1,Number(state.cart[i].qty||1)+d);save();openCart()};
window.removeCart=i=>{state.cart.splice(i,1);save();openCart()};

function deliveryOptions(){
 const opts=[];
 metroLines.forEach(l=>l.stations.forEach((s,idx)=>opts.push({id:`metro:${l.id}:${idx}`,kind:'metro',label:`${t(l.key)} · ${localName(s)}`,price:5})));
 postCities.forEach((c,idx)=>opts.push({id:`post:${idx}`,kind:'post',label:`${t('post')} · ${localName(c)}`,price:null}));
 return opts;
}
window.startCheckout=function(productId,fromCart=false){
 if(!fromCart)closeProduct();
 const items=fromCart?state.cart.map(x=>({productId:x.productId,qty:Math.max(1,Number(x.qty||1)),size:x.size||byId(x.productId)?.sizes?.[0]||'One size'})).filter(x=>byId(x.productId)):[{productId,qty:1,size:byId(productId)?.sizes?.[0]||'One size'}].filter(x=>byId(x.productId));
 if(!items.length){toast(t('emptyCart'));return}
 checkoutDraft={fromCart,items,discount:0,deliveryId:deliveryOptions()[0].id,comment:'',postalCity:''};renderCheckout();
};
function renderCheckout(){
 const opts=deliveryOptions(), selected=opts.find(o=>o.id===checkoutDraft.deliveryId)||opts[0], isPost=selected.kind==='post';
 modal(`<div class="close-row"><div><h3>${t('checkout')}</h3><div class="small muted">${t('checkoutSub')}</div></div><button class="icon-btn" onclick="closeModal()">×</button></div>
 <div class="stack" style="margin-top:15px">
  ${checkoutDraft.items.map((it,i)=>{const p=byId(it.productId);return `<div class="checkout-item"><div class="checkout-item-head"><img class="checkout-thumb" src="${esc(p.images?.[0]||svg(p.name))}"><div><b>${esc(p.name)}</b><div class="small muted">${money(p.price)}</div></div></div><div class="checkout-controls"><div class="field"><label>${t('size')}</label><select onchange="checkoutSize(${i},this.value)">${(p.sizes?.length?p.sizes:['One size']).map(s=>`<option ${s===it.size?'selected':''}>${esc(s)}</option>`).join('')}</select></div><div class="field"><label>${t('quantity')}</label><div class="qty" style="margin:0"><button onclick="checkoutQty(${i},-1)">−</button><b>${it.qty}</b><button onclick="checkoutQty(${i},1)">+</button></div></div></div></div>`}).join('')}
  <div class="field"><label>${t('delivery')}</label><select id="deliverySelect" onchange="checkoutDelivery(this.value)">${metroLines.map(l=>`<optgroup label="${t(l.key)}">${opts.filter(o=>o.kind==='metro'&&o.id.includes(':'+l.id+':')).map(o=>`<option value="${o.id}" ${o.id===checkoutDraft.deliveryId?'selected':''}>${esc(o.label)} · 5 BYN</option>`).join('')}</optgroup>`).join('')}<optgroup label="${t('post')}">${opts.filter(o=>o.kind==='post').map(o=>`<option value="${o.id}" ${o.id===checkoutDraft.deliveryId?'selected':''}>${esc(o.label)} · ${t('postalCOD')}</option>`).join('')}</optgroup></select></div>
  ${isPost?`<div class="notice">${t('postText')}</div><div class="field"><label>${t('postalCity')}</label><input id="postalCityInput" value="${esc(checkoutDraft.postalCity||'')}" placeholder="${t('postalCityPh')}" oninput="checkoutDraft.postalCity=this.value"></div>`:''}
  <div class="field"><label>${t('promo')}</label><div class="row"><input id="promoCode" placeholder="MOIS5"><button class="ghost-btn" onclick="applyPromo()">${t('apply')}</button></div><div class="small muted" id="promoInfo">${checkoutDraft.discount?t('promoOk'):t('promoHint')}</div></div>
  <div class="field"><label>${t('comment')}</label><textarea id="checkoutComment" placeholder="${t('commentPh')}" oninput="checkoutDraft.comment=this.value">${esc(checkoutDraft.comment||'')}</textarea></div>
  <div class="panel" id="checkoutSummary"></div><button class="primary-btn" onclick="confirmCheckout()">${t('placeOrder')}</button>
 </div>`);
 updateSummary();
}
window.checkoutQty=(i,d)=>{const x=checkoutDraft.items[i];if(!x)return;x.qty=Math.max(1,Number(x.qty||1)+d);renderCheckout()};
window.checkoutSize=(i,v)=>{if(checkoutDraft.items[i])checkoutDraft.items[i].size=v};
window.checkoutDelivery=v=>{checkoutDraft.deliveryId=v;renderCheckout()};
window.applyPromo=()=>{const c=($('#promoCode')?.value||'').trim().toUpperCase();checkoutDraft.discount=c==='MOIS5'?5:0;const e=$('#promoInfo');if(e){e.textContent=checkoutDraft.discount?t('promoOk'):t('promoBad');e.style.color=checkoutDraft.discount?'#21815b':'#cf4f4f'}updateSummary()};
function subtotal(){return checkoutDraft.items.reduce((s,it)=>{const p=byId(it.productId);return s+(p?p.price*it.qty:0)},0)}
function updateSummary(){
 const el=$('#checkoutSummary');if(!el)return;const opt=deliveryOptions().find(o=>o.id===checkoutDraft.deliveryId),sub=subtotal(),disc=sub*(checkoutDraft.discount||0)/100,delivery=opt?.kind==='metro'?5:0,total=sub-disc+delivery;
 el.innerHTML=`<div class="row space"><span class="muted">${t('goods')}</span><b>${money(sub)}</b></div><div class="row space" style="margin-top:7px"><span class="muted">${t('deliveryCost')}</span><b>${opt?.kind==='metro'?money(5):t('postalTariff')}</b></div>${disc?`<div class="row space" style="margin-top:7px"><span class="muted">${t('discount')}</span><b style="color:#7c5ac8">−${money(disc)}</b></div>`:''}<div class="divider"></div><div class="row space"><b>${t('total')}</b><b style="font-size:21px;color:#6f4bb6">${money(total)}${opt?.kind==='post'?'*':''}</b></div>${opt?.kind==='post'?`<div class="small muted" style="margin-top:6px">* ${t('deliveryCost')} — ${t('postalTariff')}</div>`:''}`;
}
window.confirmCheckout=()=>{
 const opt=deliveryOptions().find(o=>o.id===checkoutDraft.deliveryId);if(!opt)return;
 const sub=subtotal(),disc=sub*(checkoutDraft.discount||0)/100,delivery=opt.kind==='metro'?5:0,total=sub-disc+delivery;
 const order={id:'MS-'+Date.now().toString().slice(-8),createdAt:new Date().toISOString(),status:t('orderStatus'),items:checkoutDraft.items.map(it=>{const p=byId(it.productId);return {productId:it.productId,name:p.name,qty:it.qty,size:it.size,price:p.price}}),delivery:opt.label,deliveryKind:opt.kind,deliveryPrice:opt.kind==='metro'?5:null,postalCity:checkoutDraft.postalCity||'',promo:checkoutDraft.discount?'MOIS5':'',discount:checkoutDraft.discount||0,comment:checkoutDraft.comment||'',total};
 state.orders.unshift(order);if(checkoutDraft.fromCart)state.cart=[];save();
 modal(`<div style="text-align:center;padding:9px 3px 4px"><div style="width:70px;height:70px;border-radius:23px;background:#e4f8ef;color:#27845f;display:grid;place-items:center;font-size:33px;margin:0 auto 13px">✓</div><h3>${t('orderDone')}</h3><p class="muted" style="font-size:13px;line-height:1.55">${esc(order.id)}<br>${t('orderDoneText')}</p><div class="panel" style="font-size:17px;font-weight:850;color:#6f4bb6">${esc(state.settings.managerUsername)}</div><button class="primary-btn" style="width:100%;margin-top:13px" onclick="closeModal();openChat()">${t('writeManager')}</button><button class="ghost-btn" style="width:100%;margin-top:8px" onclick="closeModal()">${t('close')}</button></div>`);
};

window.openOrders=()=>modal(`<div class="close-row"><div><h3>${t('myOrders')}</h3><div class="small muted">${state.orders.length} ${t('orders')}</div></div><button class="icon-btn" onclick="closeModal()">×</button></div><div class="stack" style="margin-top:15px">${state.orders.length?state.orders.map(o=>`<div class="order-card"><div class="row space"><b>${esc(o.id)}</b><span class="info-pill">${esc(o.status)}</span></div><div class="small muted" style="margin-top:5px">${new Date(o.createdAt).toLocaleString(lang()==='be'?'be-BY':'ru-RU')}</div><div class="divider"></div>${o.items.map(i=>`<div class="small">${esc(i.name)} · ${esc(i.size||'')} · ×${i.qty}</div>`).join('')}<div class="small muted" style="margin-top:8px">${esc(o.delivery)}${o.postalCity?' · '+esc(o.postalCity):''}</div><div class="row space" style="margin-top:8px"><span class="small muted">${o.deliveryKind==='post'?t('postalTariff'):''}</span><b>${money(o.total)}</b></div></div>`).join(''):`<div class="empty">${t('ordersEmpty')}</div>`}</div>`);

function userLink(u){return 'https://t.me/'+encodeURIComponent(String(u||'').replace(/^@/,''))}
window.openSupport=()=>window.open(userLink(state.settings.supportUsername),'_blank');window.openChat=()=>window.open(userLink(state.settings.managerUsername),'_blank');
window.copyReferral=async()=>{try{await navigator.clipboard.writeText($('#refLink').value);toast(t('copy'))}catch(e){$('#refLink').select();document.execCommand('copy');toast(t('copy'))}};

window.openAdmin=()=>{adminTab='dashboard';$('#adminScreen').classList.remove('hidden');document.body.style.overflow='hidden';renderAdmin()};
window.closeAdmin=()=>{$('#adminScreen').classList.add('hidden');document.body.style.overflow=''};
$('#adminTabs').onclick=e=>{const b=e.target.closest('[data-admin]');if(!b)return;adminTab=b.dataset.admin;renderAdmin()};
function renderAdmin(){
 $$('#adminTabs .admin-tab').forEach(b=>b.classList.toggle('active',b.dataset.admin===adminTab));const c=$('#adminContent');
 if(adminTab==='dashboard'){const revenue=state.orders.reduce((s,o)=>s+Number(o.total||0),0);c.innerHTML=`<div class="admin-kpis"><div class="kpi"><b>${state.products.length}</b><span>${t('productsCount')}</span></div><div class="kpi"><b>${state.orders.length}</b><span>${t('ordersCount')}</span></div><div class="kpi"><b>${money(revenue)}</b><span>${t('orderSum')}</span></div></div><div class="notice" style="margin-top:11px">${t('localNotice')}</div>`}
 if(adminTab==='products')c.innerHTML=`<div class="row space" style="margin-bottom:11px"><div><b style="font-size:17px">${t('productsManage')}</b><div class="small muted">${t('productsManageSub')}</div></div><button class="primary-btn" onclick="editProduct()">${t('addProduct')}</button></div><div class="stack">${state.products.map(p=>`<div class="admin-product"><img src="${esc(p.images?.[0]||svg(p.name))}"><div><b>${esc(p.name)}</b><span>${money(p.price)} · ${esc(p.category||'')}</span></div><button onclick="editProduct('${esc(p.id)}')">${t('edit')}</button></div>`).join('')}</div>`;
 if(adminTab==='orders')c.innerHTML=state.orders.length?`<div class="stack">${state.orders.map(o=>`<div class="panel"><div class="row space"><b>${esc(o.id)}</b><b>${money(o.total)}</b></div><div class="small muted" style="margin-top:5px">${new Date(o.createdAt).toLocaleString(lang()==='be'?'be-BY':'ru-RU')}</div><div class="small" style="margin-top:8px">${o.items.map(i=>esc(i.name)+' ×'+i.qty).join('<br>')}</div><div class="field" style="margin-top:10px"><label>Status</label><select onchange="setOrderStatus('${esc(o.id)}',this.value)">${['Оформлен','Связались с клиентом','В обработке','Отправлен','Готов к выдаче','Завершён','Отменён'].map(s=>`<option ${s===o.status?'selected':''}>${s}</option>`).join('')}</select></div></div>`).join('')}</div>`:`<div class="empty">${t('noOrders')}</div>`;
 if(adminTab==='settings')c.innerHTML=`<div class="panel stack"><div class="field"><label>${t('shopName')}</label><input id="setShopName" value="${esc(state.settings.shopName)}"></div><div class="field"><label>${t('manager')}</label><input id="setManager" value="${esc(state.settings.managerUsername)}"></div><div class="field"><label>${t('supportUser')}</label><input id="setSupport" value="${esc(state.settings.supportUsername)}"></div><div class="field"><label>${t('referral')}</label><input id="setReferral" value="${esc(state.settings.referralBase)}"></div><div class="field"><label>${t('discountFriend')}</label><input id="setDiscount" type="number" min="0" max="100" value="${Number(state.settings.discountPercent||5)}"></div><div class="field"><label>${t('interfaceLanguage')}</label><select id="setLang"><option value="ru" ${lang()==='ru'?'selected':''}>Русский</option><option value="be" ${lang()==='be'?'selected':''}>Беларуская</option></select></div><button class="primary-btn" onclick="saveSettings()">${t('save')}</button><button class="ghost-btn" onclick="resetDemo()">${t('reset')}</button></div>`;
}
window.setOrderStatus=(id,s)=>{const o=state.orders.find(x=>x.id===id);if(o){o.status=s;save();renderAdmin();toast(t('statusUpdated'))}};
window.saveSettings=()=>{state.settings.shopName=$('#setShopName').value.trim()||'Mois Shop';state.settings.managerUsername=$('#setManager').value.trim()||'@mois_shop_manager';state.settings.supportUsername=$('#setSupport').value.trim()||'@mois_shop_support';state.settings.referralBase=$('#setReferral').value.trim()||defaults.settings.referralBase;state.settings.discountPercent=Math.max(0,Math.min(100,Number($('#setDiscount').value||5)));state.settings.language=$('#setLang').value==='be'?'be':'ru';save();renderAdmin();toast(t('saved'))};
window.resetDemo=()=>{if(!confirm(t('resetAsk')))return;state=clone(defaults);save();renderAdmin();toast(t('resetDone'))};

window.editProduct=(id='')=>{const p=id?byId(id):null;modal(`<div class="close-row"><div><h3>${p?t('editProduct'):t('newProduct')}</h3></div><button class="icon-btn" onclick="closeModal()">×</button></div><div class="stack" style="margin-top:15px"><div class="field"><label>${t('name')}</label><input id="apName" value="${esc(p?.name||'')}"></div><div class="field"><label>${t('price')}</label><input id="apPrice" type="number" min="0" step="0.01" value="${p?.price??''}"></div><div class="field"><label>${t('category')}</label><input id="apCategory" value="${esc(p?.category||'Одежда')}"></div><div class="field"><label>${t('stock')}</label><input id="apStock" type="number" min="0" value="${p?.stock??0}"></div><div class="field"><label>${t('sizes')}</label><input id="apSizes" value="${esc((p?.sizes||['One size']).join(', '))}"></div><div class="field"><label>${t('description')}</label><textarea id="apDesc">${esc(p?.description||'')}</textarea></div><div class="field"><label>${t('photos')}</label><textarea id="apImages" placeholder="https://...">${esc((p?.images||[]).filter(x=>!x.startsWith('data:image')).join('\n'))}</textarea></div><button class="primary-btn" onclick="saveProduct('${esc(id)}')">${t('saveProduct')}</button>${p?`<button class="ghost-btn" style="color:#d15353" onclick="deleteProduct('${esc(id)}')">${t('deleteProduct')}</button>`:''}</div>`)};
window.saveProduct=(id='')=>{const name=$('#apName').value.trim();if(!name)return;const urls=$('#apImages').value.split('\n').map(x=>x.trim()).filter(Boolean),data={id:id||'p'+Date.now(),name,price:Number($('#apPrice').value||0),category:$('#apCategory').value.trim()||'Другое',stock:Math.max(0,Number($('#apStock').value||0)),sizes:$('#apSizes').value.split(',').map(x=>x.trim()).filter(Boolean),description:$('#apDesc').value.trim(),images:urls.length?urls:[svg(name)]};if(id){const i=state.products.findIndex(x=>x.id===id);if(i>=0){if(!urls.length&&state.products[i].images?.length)data.images=state.products[i].images;state.products[i]=data}}else state.products.unshift(data);save();closeModal();adminTab='products';renderAdmin();toast(t('productSaved'))};
window.deleteProduct=id=>{state.products=state.products.filter(x=>x.id!==id);state.cart=state.cart.filter(x=>x.productId!==id);save();closeModal();renderAdmin();toast(t('productDeleted'))};

try{const tg=window.Telegram?.WebApp;if(tg){tg.ready();tg.expand();const u=tg.initDataUnsafe?.user;if(u){state.user.id=String(u.id||state.user.id);state.user.name=[u.first_name,u.last_name].filter(Boolean).join(' ')||state.user.name;state.user.username=u.username?'@'+u.username:state.user.username;state.user.avatar=u.photo_url||state.user.avatar;save(false)}}}catch(e){}
refresh();
setTimeout(()=>$('#splash').classList.add('leave'),2600);setTimeout(()=>$('#splash')?.remove(),3350);
})();
