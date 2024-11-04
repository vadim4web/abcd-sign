import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    moto: 'Your turnkey choice that’s second to none!',
    mainPage: 'Main page',
    company: 'About us',
    about: 'About our company',
    services: 'Our services',
    showcases: 'About our services',
    contacts: 'Contact us',
    contactTip: 'Want to know more? Get in touch with us!',
    contact_intro: 'Feel free to reach out using any contact method below, or simply fill out the form, and we’ll get back to you as soon as possible!',
    contact_phone: 'Phone',
    contact_mail: 'Mail',
    contact_tg: 'Telegram',
    form_name: 'NAME',
    form_name_ph: 'Name',
    form_phone: 'PHONE',
    form_phone_tip: 'Phone number must be in the format +380XXXXXXXXX',
    form_project: 'PROJECT',
    form_project_ph: 'Interior design and decor',
    form_budget: 'BUDGET (in UAH ₴)',
    form_comment: 'COMMENT',
    form_comment_ph: 'Call me from 10:00 to 16:00',
    form_send: 'SEND',
    success: 'Sent!',
    try_again: 'Try again',
    ambience: 'Ambience',
    building: 'Building',
    crafting: 'Crafting',
    design: 'Design',
    emailSend: 'Email us',
    chatDirect: 'Message us on Telegram',
    phoneUs: 'Call us',
    copyright: 'All rights reserved',
    design_description_full: 'Design is the process of creating an aesthetically pleasing, functional, and practical environment that takes into account the needs of users, space, materials, and technologies. It encompasses various fields, including landscape, exterior, and interior design, each with its own features and tasks.',
    ambience_description: 'Landscape design involves creating harmonious and functional outdoor environments. It focuses on gardens, parks, and public spaces, balancing nature and architecture.',
    building_description: 'Exterior design addresses the look and feel of buildings, considering architectural styles, colors, materials, and practical aspects for functionality.',
    crafting_description: 'Interior design emphasizes creating appealing and functional indoor spaces, considering colors, materials, furniture, and overall usability for comfort.',
    design_description: 'Design, in general, combines art and science to create structures, objects, or environments that improve quality of life, focusing on aesthetic and functional harmony.',
    a00: 'Ambience Ξ Landscape',
    b00: 'Building Ξ Exterior',
    c00: 'Crafting Ξ Interior',
    d00: 'Design Ξ Synergy',
    a01_title: 'Porch',
    a01_description: 'A welcoming porch area, perfect for outdoor relaxation and gatherings, blending functionality with aesthetic charm. The classic design emphasizes comfort and practicality, making it a great extension of the living space.',
    a02_title: 'Rose',
    a02_description: 'A vibrant rose in full bloom, adding a touch of elegance and color to the surrounding landscape. This iconic flower serves as a timeless symbol of beauty and tranquility.',
    a03_title: 'Lights',
    a03_description: 'A string of outdoor lights illuminating the space, creating a magical and cozy atmosphere. Perfect for evening gatherings or simply enjoying a quiet moment in the garden.',
    a04_title: 'Pool',
    a04_description: 'An outdoor framed pool, ideal for cooling off during hot summer days. The simple design makes it a convenient and refreshing addition to any backyard.',
    a05_title: 'Drainage',
    a05_description: 'A carefully constructed drainage system designed to keep your lawn healthy and prevent waterlogging. A subtle yet essential part of any well-maintained landscape.',
    a06_title: 'Garage',
    a06_description: 'A sleek carport garage offering both protection for vehicles and a modern design aesthetic. Its open structure makes it a versatile solution for various outdoor settings.',
    a07_title: 'Indoor Pool',
    a07_description: 'A luxurious indoor pool, offering year-round relaxation and exercise opportunities. The closed, climate-controlled space ensures comfort no matter the weather.',
    a08_title: 'Planter',
    a08_description: 'A large concrete planter designed to house trees, combining durability with a minimalist aesthetic. This feature adds a modern touch to any outdoor area.',
    a09_title: 'Bench',
    a09_description: 'A sturdy concrete bench, perfect for outdoor seating. Its simple yet elegant design blends seamlessly into a variety of landscapes.',
    a10_title: 'Pathway',
    a10_description: 'A paved walkway made of FEM tiles, offering both aesthetic appeal and functionality. The well-constructed path leads the way through a beautifully landscaped garden.',
    b01_title: 'Ceiling',
    b01_description: 'Welding the ceiling structure, a critical step in building strong and durable overhead frameworks. This process ensures safety and longevity for the entire construction.',
    b02_title: 'Terrace Door',
    b02_description: 'A transformation of a window into a terrace door on the second floor, opening up the space to new possibilities and adding convenience for outdoor access.',
    b03_title: 'Concrete Base',
    b03_description: 'Laying the concrete foundation for future stone paving. This essential step provides a solid, long-lasting base for a well-crafted outdoor surface.',
    b04_title: 'Foundation',
    b04_description: 'Pouring the reinforced foundation for the upcoming concrete layer. A critical step in ensuring the stability and durability of the structure.',
    b05_title: 'Polishing',
    b05_description: 'Wall polishing under specialized lighting to achieve a smooth, glossy finish, preparing the surface for glazing paint and enhancing its aesthetic appeal.',
    b06_title: 'Concrete Planter',
    b06_description: 'A high-quality concrete planter with a polished, glossy surface, showcasing the precision and care taken in its casting. This durable feature is both practical and stylish.',
    b07_title: 'Pipes & Cat',
    b07_description: 'A playful scene with a cat inspecting plumbing pipes awaiting installation. A lighthearted moment amidst the practicalities of construction.',
    b08_title: 'Protective Film',
    b08_description: 'Protective film covering areas to keep them clean and dust-free during construction. This ensures a neater workspace and a smoother final result.',
    b09_title: 'Shower Cabin',
    b09_description: 'A transparent glass shower cabin, installed with delicate precision. Its sleek design adds modern elegance to any bathroom interior.',
    b10_title: 'Stone Paving',
    b10_description: 'A perfectly leveled stone-paved surface, complete with a slight incline for proper drainage. The craftsmanship ensures both beauty and practicality.',
    c01_title: 'Golden Lines',
    c01_description: 'Decorative plasterwork featuring golden lines, adding a luxurious and artistic touch to the interior. The intricate design brings sophistication and elegance to the space.',
    c02_title: 'Gold & Carbon',
    c02_description: 'A striking continuation of the decorative plaster theme, mixing gold and carbon tones for a unique and bold aesthetic. This modern design exudes both style and substance.',
    c03_title: 'Thousand Lines',
    c03_description: 'Intricately detailed decorative plaster with numerous fine lines, creating texture and depth. This artwork transforms a simple wall into a statement piece.',
    c04_title: 'Wood Texture Effect',
    c04_description: 'Plasterwork that masterfully mimics the natural texture of wood, combining the warmth of organic materials with the durability of plaster. This eco-friendly technique adds both sophistication and warmth, making it an elegant design solution for any space.',
    c05_title: 'Brick Effect',
    c05_description: 'Decorative plaster mimicking the look of brick, bringing a rustic charm to the interior. The rough texture adds character and authenticity to the space.',
    c06_title: 'Kids Room',
    c06_description: 'A nearly finished children’s room, featuring smooth surfaces and custom colors. This carefully designed space balances fun with practicality.',
    c07_title: 'Refreshed Bedroom',
    c07_description: 'Beautifully restored walls and ceiling, polished to perfection after extensive renovations. Coated in multiple layers of natural, subtly tinted paint, creating a harmonious and refined ambiance.',
    c08_title: 'Islands',
    c08_description: 'Decorative plaster resembling small islands, creating a unique and playful visual effect. This artistic feature brings a sense of adventure to the room.',
    c09_title: 'Glass Veranda',
    c09_description: 'A large veranda with folding glass doors, allowing for an open, airy space that merges indoor comfort with outdoor beauty. A seamless transition between environments.',
    c10_title: 'Azure Islands',
    c10_description: 'A vibrant decorative feature with bright azure tones, bringing a pop of color and a refreshing feel to the space. The islands create a dynamic focal point.',
    d01_title: 'Kitchen Lighting',
    d01_description: 'A thoughtfully designed kitchen lighting setup that combines function with style. The strategic placement ensures a bright, welcoming space for cooking and socializing.',
    d02_title: 'Multi-Function Cabinet',
    d02_description: 'A multi-purpose kitchen cabinet offering a balance of storage and design. This modern piece provides functionality without compromising on aesthetics.',
    d03_title: 'Stone Table',
    d03_description: 'An elegant stone table that serves as a centerpiece in a high-end kitchen. The solid, polished surface speaks to both luxury and durability.',
    d04_title: 'Bar Table',
    d04_description: 'A stylish bar table that complements the overall kitchen design. The sleek lines and modern materials make it a functional yet sophisticated addition.',
    d05_title: 'Green Zone',
    d05_description: 'A unique wall design that blends gypsum board with wooden accents, creating a cozy and natural feel in the space. The green zone adds warmth and a touch of nature.',
    d06_title: 'Stencil Flower',
    d06_description: 'A decorative plaster design resembling a large flower, blending ancient craftsmanship with contemporary aesthetics. This bold design is both timeless and modern.',
    d07_title: 'Tile Path',
    d07_description: 'A neatly laid tile path that guides you through a beautifully landscaped area. The craftsmanship ensures durability and aesthetic harmony with the surroundings.',
    d08_title: 'Perfect Harmony',
    d08_description: 'A room where every element, from tiles to decor, works in perfect harmony. The cozy, balanced design is completed by two satisfied pets enjoying the space.',
    d09_title: 'Concrete Counter',
    d09_description: 'A polished concrete countertop for the kitchen sink, gleaming with a glossy finish. This durable surface combines functionality with a sleek, modern design.',
    d10_title: 'Our Colors',
    d10_description: 'A stunning example of decorative plastering showcasing the vibrant yellow and blue colors of Ukraine. This design captures the essence of national pride and identity, creating a warm and inviting atmosphere.',
    lang: 'English',
    flag: './Flag_of_the_United_Kingdom.webp',
    toggleLangTip: 'Change language',
    toggleThemeTip: 'Change theme',
    404: 'No such a page found...',
    '404_1': 'This route',
    '404_2': 'has no destination, but...',
    '404_3': '...the way back still exists.',
    '404_4': 'Here it is,',
    back404: 'Back to the main',
    backPreviousPage: 'Go back to page',
    aboutUs1: 'We are a young yet ambitious team with each of us bringing extensive and diverse experience to the table. We believe that a talented person can be talented in many areas — whether in design, football, music, programming, or poetry. Though professionally trained as engineers in power networks and construction, we’ve chosen to dedicate ourselves wholeheartedly to DESIGN.',
    aboutUs2: 'We see the world as a grand Design — a masterpiece crafted by the universal energy that began with Design, exists through Design, and will end in Design (and of course, Love ❤). This vision has inspired us to become a company fully charged with creating beauty, harmony, and thoughtful Design in all forms: from landscapes and exteriors to interiors and web. Still, our primary focus is on interior Design, finishing works, and decor.',
    aboutUs3: 'Our expertise includes creating concrete structures from building frameworks to concrete furniture. We’re skilled in setting up communications, applying finishing techniques, and installing various elements and equipment. We’re constantly expanding our professional competencies, experience, toolkit, and portfolio — serving more and more satisfied clients.',
    aboutUs4: 'If you need help creating a functional and beautifully designed space “turnkey” and with all the right feng shui, reach out in the way that suits you best. We’d be thrilled to help bring your boldest, most intricate design projects to life.',
    lifeStyle1: 'My lifestyle — "LIVSIGN"',
    lifeStyle2: 'Living to design, designing for life.',
    lifeStyle3: 'My lifestyle is PLAY',
    lifeStyle4: 'Living in motion: competing, training, winning.',
  },
  uk: {
    moto: 'Ваш вибір під ключ, що не має замін!',
    mainPage: 'Головна сторінка',
    company: 'Про нас',
    about: 'Про нашу компанію',
    services: 'Наші послуги',
    showcases: 'Про наші послуги',
    contacts: 'Зв\'язатися з нами',
    contactTip: 'Хочете дізнатися більше? Зв’яжіться з нами!',
    contact_intro: 'Зв\'яжіться з нами будь-яким зручним для вас способом або просто заповніть форму, і ми зв\'яжемося з вами якнайшвидше!',
    contact_phone: 'Телефон',
    contact_mail: 'Пошта',
    contact_tg: 'Телеграм',
    form_name: 'ІМ\'Я',
    form_name_ph: 'Ім\'я',
    form_phone: 'ТЕЛЕФОН',
    form_phone_tip: 'Номер телефону має бути у форматі +380XXXXXXXXX',
    form_project: 'ПРОЕКТ',
    form_project_ph: 'Дизайн і декор інтер’єру',
    form_budget: 'БЮДЖЕТ (в грн ₴)',
    form_comment: 'КОМЕНТАР',
    form_comment_ph: 'Дзвоніть мені з 10:00 до 16:00',
    form_send: 'НАДІСЛАТИ',
    success: 'Відправлено!',
    try_again: 'Спробуйте ще раз',
    ambience: 'Атмосфера',
    building: 'Втілення',
    crafting: 'Створення',
    design: 'Дизайн',
    emailSend: 'Написати листа',
    chatDirect: 'Написати в Telegram',
    phoneUs: 'Подзвонити нам',
    copyright: 'Усі права захищено',
    design_description_full: 'Дизайн — це процес створення естетично привабливого, функціонального та практичного середовища, який враховує потреби користувачів, простір, матеріали та технології. Він охоплює різні напрямки, включаючи ландшафтний, екстер\'єрний та інтер\'єрний дизайн, кожен із яких має свої особливості й задачі.',
    ambience_description: 'Ландшафтний дизайн полягає у створенні гармонійного та функціонального зовнішнього середовища. Він охоплює проєктування садів, парків і громадських просторів, створюючи баланс між природою та архітектурою.',
    building_description: 'Екстер’єрний дизайн стосується зовнішнього вигляду будівель, враховуючи архітектурні стилі, кольори, матеріали та практичні аспекти функціональності.',
    crafting_description: 'Інтер’єрний дизайн фокусується на створенні привабливих і функціональних внутрішніх просторів, враховуючи кольори, матеріали, меблі та загальну зручність для комфорту.',
    design_description: 'Дизайн, в цілому, поєднує мистецтво і науку для створення структур, об\'єктів або середовищ, які покращують якість життя, зосереджуючи увагу на естетичній та функціональній гармонії.',
    a00: 'Атмосфера Ξ Ландшафт',
    b00: 'Втілення Ξ Екстерєр',
    c00: 'Створення Ξ Інтерєр',
    d00: 'Дизайн Ξ Синергія',
    a01_title: 'Ганок',
    a01_description: 'Затишний ганок, ідеальний для відпочинку на свіжому повітрі та сімейних зібрань. Класичний дизайн поєднує функціональність і естетику, створюючи додатковий житловий простір.',
    a02_title: 'Троянда',
    a02_description: 'Яскрава троянда в повному розквіті, що додає нотку елегантності та кольору в ландшафт. Ця квітка символізує красу та гармонію.',
    a03_title: 'Гірлянда',
    a03_description: 'Вулична гірлянда, що створює чарівну та затишну атмосферу. Ідеально підходить для вечірніх зустрічей або тихого відпочинку в саду.',
    a04_title: 'Басейн',
    a04_description: 'Каркасний басейн, ідеальний для охолодження в спекотні літні дні. Простий дизайн робить його зручним доповненням до будь-якого двору.',
    a05_title: 'Дренаж',
    a05_description: 'Система дренажу для газону, яка запобігає затопленню і зберігає здоров’я трави. Незамінний елемент доглянутого ландшафту.',
    a06_title: 'Гараж',
    a06_description: 'Навісний гараж, що забезпечує захист для автомобілів та стильний дизайн. Відкрита конструкція робить його універсальним рішенням для різних зовнішніх просторів.',
    a07_title: 'Внутрішній басейн',
    a07_description: 'Розкішний закритий басейн, який забезпечує комфортний відпочинок і можливість тренувань цілий рік. Затишне приміщення з клімат-контролем гарантує зручність у будь-яку пору.',
    a08_title: 'Вазон',
    a08_description: 'Великий бетонний вазон для дерева, який поєднує міцність і сучасний мінімалізм. Чудовий акцент для будь-якого зовнішнього простору.',
    a09_title: 'Лавка',
    a09_description: 'Стійка бетонна лавка для зовнішнього використання. Її простий, але елегантний дизайн гармонійно вписується в різні ландшафтні рішення.',
    a10_title: 'Доріжка',
    a10_description: 'Викладена плиткою доріжка з ФЕМ, що поєднує естетику та функціональність. Добре побудована дорога веде через чудовий сад.',
    b01_title: 'Стеля',
    b01_description: 'Зварювання стельової конструкції – важливий етап, що гарантує міцність і довговічність будівлі.',
    b02_title: 'Двері на терасу',
    b02_description: 'Перетворення вікна на двері на терасу на другому поверсі – це відкриття нових можливостей і зручності для доступу на вулицю.',
    b03_title: 'Фундамент',
    b03_description: 'Бетонування основи під майбутню бруківку з каменю. Цей етап забезпечує довговічність і міцність майбутнього покриття.',
    b04_title: 'Армований фундамент',
    b04_description: 'Заливка армованого фундаменту для наступного бетонного шару. Важливий крок для забезпечення стабільності і міцності конструкції.',
    b05_title: 'Шліфування стін',
    b05_description: 'Шліфування стін під спеціальним освітленням для досягнення гладкого, глянцевого фінішу. Це готує поверхню для глазурного фарбування та покращує її естетичний вигляд.',
    b06_title: 'Глянцевий вазон',
    b06_description: 'Якісно відлитий бетонний вазон з глянцевою поверхнею. Він демонструє точність та турботу про кожну деталь, стаючи практичним і стильним елементом.',
    b07_title: 'Труби та кицька',
    b07_description: 'Кумедна сцена, де кицька досліджує сантехнічні труби, що очікують на монтаж. Легкий момент серед практичних будівельних робіт.',
    b08_title: 'Захисна плівка',
    b08_description: 'Захисна плівка, яка допомагає підтримувати чистоту і мінімізує кількість пилу під час робіт. Це забезпечує більш акуратне робоче місце та чистий кінцевий результат.',
    b09_title: 'Душова кабіна',
    b09_description: 'Прозора скляна душова кабіна, встановлена з ретельною точністю. Її витончений дизайн додає сучасної елегантності ванній кімнаті.',
    b10_title: 'Мощення каменем',
    b10_description: 'Рівно викладена поверхня з каменю з правильним нахилом для стоку води. Цей високоякісний результат забезпечує як естетику, так і практичність.',
    c01_title: 'Золоті лінії',
    c01_description: 'Декоративна шпаклівка із золотими лініями, що додає розкоші та витонченості інтер’єру. Інтригуючий дизайн створює відчуття багатства та стилю.',
    c02_title: 'Золото та карбон',
    c02_description: 'Комбінація золота та карбону в декоративній шпаклівці створює сміливий та унікальний вигляд. Цей сучасний дизайн вирізняється гармонією кольорів та текстур.',
    c03_title: 'Тисяча ліній',
    c03_description: 'Деталізована декоративна шпаклівка з численними тонкими лініями, що створюють текстуру та глибину. Це перетворює стіну на справжній мистецький витвір.',
    c04_title: 'Текстура дерева',
    c04_description: 'Шпаклівка, що майстерно імітує текстуру дерева, поєднуючи тепло природних матеріалів і міцність шпаклівки. Це екологічне рішення додає інтер\'єру витонченості та тепла, створюючи елегантний вигляд простору.',
    c05_title: 'Імітація цегли',
    c05_description: 'Декоративна шпаклівка, яка відтворює вигляд цегли, додаючи інтер’єру сільського шарму. Груба текстура додає характеру та автентичності.',
    c06_title: 'Дитяча кімната',
    c06_description: 'Майже завершена дитяча кімната з гладкими поверхнями та індивідуальними кольорами. Простір збалансований між практичністю та комфортом.',
    c07_title: 'Оновлена спальня',
    c07_description: 'Естетично відреставровані стіни та стеля, відполіровані після капітальних робіт. Покриті кількома шарами натуральної тонованої фарби, що створює гармонійний і вишуканий вигляд.',
    c08_title: 'Острівки',
    c08_description: 'Декоративна шпаклівка у вигляді маленьких острівців, що створює цікавий ігровий ефект. Цей художній елемент привносить у кімнату відчуття пригод.',
    c09_title: 'Прозора веранда',
    c09_description: 'Велика веранда зі складними скляними дверима, що дозволяє легко поєднати комфорт приміщення з красою природи. Ідеальний перехід між просторами.',
    c10_title: 'Лазурні острівки',
    c10_description: 'Яскравий декоративний елемент з блакитними відтінками, що додає простору свіжість. Острівки створюють динамічний акцент у дизайні.',
    d01_title: 'Освітлення кухні',
    d01_description: 'Дизайнерське рішення для освітлення кухні, що поєднує функціональність із стилем. Світильники розташовані для забезпечення яскравого і затишного простору.',
    d02_title: 'Шафа',
    d02_description: 'Мультифункціональна шафа для кухні, що поєднує зберігання з естетичним дизайном. Сучасна деталь, яка додає простору практичності та стилю.',
    d03_title: 'Кам’яний стіл',
    d03_description: 'Елегантний стіл з каменю, який стає центром уваги в розкішній кухні. Міцна і полірована поверхня підкреслює розкіш і довговічність.',
    d04_title: 'Стіл-бар',
    d04_description: 'Стильний барний стіл, що доповнює загальний дизайн кухні. Чіткі лінії і сучасні матеріали роблять його функціональним і вишуканим елементом.',
    d05_title: 'Зелена зона',
    d05_description: 'Оригінальний дизайн стін з гіпсокартону та дерев’яних вставок, що створює затишок і природність у приміщенні. Зелена зона додає простору тепла та натхнення.',
    d06_title: 'Трафарет квітка',
    d06_description: 'Декоративна шпаклівка у вигляді великої квітки, що поєднує старовинні ремесла з сучасною естетикою. Сміливий і водночас витончений акцент у просторі.',
    d07_title: 'Тротуарна плитка',
    d07_description: 'Охайно викладена плитка, що проводить крізь чудово облаштовану зону. Витончений і практичний акцент у садовому дизайні.',
    d08_title: 'Гармонія',
    d08_description: 'Кімната, де кожен елемент, від плитки до декору, знаходиться у повній гармонії. Задоволені домашні улюбленці власників насолоджуються комфортом у новому просторі.',
    d09_title: 'Бетонна стільниця',
    d09_description: 'Полірована бетонна стільниця для кухонної мийки з блискучим глянцевим фінішем. Ця міцна поверхня поєднує функціональність із сучасним дизайном.',
    d10_title: 'Наші кольори',
    d10_description: 'Приклад декоративної шпаклівки з використанням жовтого та блакитного кольорів – символів України. Цей дизайн відображає гордість і національну ідентичність, створюючи теплу і приємну атмосферу.',
    lang: 'Ukrainian',
    flag: './Flag_of_Ukraine.webp',
    toggleLangTip: 'Змінити мову',
    toggleThemeTip: 'Змінити тему',
    404: 'Такої сторінки не знайдено...',
    '404_1': 'Цей маршрут',
    '404_2': 'не має кінцевого призначення, але...',
    '404_3': '...зворотній шлях продовжує існувати.',
    '404_4': 'Ось він,',
    back404: 'Повернутися на головну',
    backPreviousPage: 'Повернутися до сторінки',
    aboutUs1: 'Ми молода, проте амбітна команда, і за плечима кожного з нас — обширний і різноманітний досвід. Ми вважаємо, що талановита людина може бути талановитою у всьому — у дизайні, футболі, музиці, програмуванні, поезії. І хоча за фаховою освітою ми інженери електромереж та будівництва, ми вирішили присвятити себе ДИЗАЙНу з великої літери.',
    aboutUs2: 'Ми бачимо цей світ як велике творіння, яке відображає задум Творця — усе почалося з Дизайну, втілюється в Дизайні та завершиться Дизайном (ну і Любов\'ю, звісно ж ❤). Саме це надихнуло нас стати компанією, зарядженою на створення краси, гармонії та продуманого до деталей Дизайну у всіх його проявах: ландшафтному, екстер’єрному, інтер’єрному та веб. Однак наш чіткий фокус — саме на Дизайні приміщень, оздоблювальних роботах та декорі.',
    aboutUs3: 'Ми також вміємо створювати бетонні конструкції — від каркасів будівель до бетонних меблів. Добре знаємося на облаштуванні комунікацій, володіємо багатьма оздоблювальними техніками та маємо багатий досвід монтажу різних елементів і приладів. Постійно розширюємо спектр своїх професійних компетенцій, досвід, інструментарій — і портфоліо, збільшуючи кількість задоволених клієнтів.',
    aboutUs4: 'Якщо вам потрібна допомога в облаштуванні простору “під ключ” і з усім феншуєм — звертайтеся зручним для вас способом. Будемо раді допомогти в реалізації ваших найсміливіших і комплексних дизайнерських проектів.',
    lifeStyle1: 'Мій стиль життя — "ЖИЗАЙН"',
    lifeStyle2: 'Жити дизайном, творити для життя.',
    lifeStyle3: 'Мій стиль життя — це ГРА',
    lifeStyle4: 'Жити в русі: змагатися, тренуватися, вигравати.',
  },
}

const i18n = createI18n({
  locale: localStorage.getItem('lang') || 'en',
  fallbackLocale: 'en',
  messages,
})

export default i18n