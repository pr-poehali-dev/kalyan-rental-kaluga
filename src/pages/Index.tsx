import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import Icon from "@/components/ui/icon"

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary via-gray-900 to-black text-white font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-secondary/95 backdrop-blur-sm border-b border-primary/20">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="font-montserrat font-bold text-xl">
              🔥 <span className="text-primary">Smokk</span> Lab
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#home" className="hover:text-primary transition-colors">Главная</a>
              <a href="#sets" className="hover:text-primary transition-colors">Наборы</a>
              <a href="#delivery" className="hover:text-primary transition-colors">Доставка</a>
              <a href="#booking" className="hover:text-primary transition-colors">Бронирование</a>
              <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
              <a href="#gallery" className="hover:text-primary transition-colors">Галерея</a>
            </div>
            <Button className="md:hidden" variant="ghost">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden py-20 px-4">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('/img/dcc3ac0a-7e30-406c-9bbe-bbb17cc3b396.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="relative container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="font-montserrat font-bold text-4xl md:text-6xl mb-6">
              Аренда кальянов в 
              <span className="text-primary block mt-2">Калуге</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
              🚀 Smokk Lab – дымный комфорт для вашего праздника!
            </p>
            <p className="text-lg mb-10 text-gray-400 max-w-2xl mx-auto">
              Качественные кальяны с полным комплектом. Быстрая доставка по Калуге от 200₽
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg">
                📞 Заказать сейчас
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 text-lg">
                📋 Посмотреть наборы
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-900 to-secondary">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gray-800/50 border-primary/20 hover:border-primary/40 transition-all animate-scale-in">
              <CardContent className="p-6 text-center">
                <Icon name="Package" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="font-montserrat font-semibold text-lg mb-2">3 варианта наборов</h3>
                <p className="text-gray-400">От бюджетного до премиум</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800/50 border-primary/20 hover:border-primary/40 transition-all animate-scale-in">
              <CardContent className="p-6 text-center">
                <Icon name="Truck" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="font-montserrat font-semibold text-lg mb-2">Быстрая доставка</h3>
                <p className="text-gray-400">По всей Калуге от 200₽</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800/50 border-primary/20 hover:border-primary/40 transition-all animate-scale-in">
              <CardContent className="p-6 text-center">
                <Icon name="User" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="font-montserrat font-semibold text-lg mb-2">Выезд мастера</h3>
                <p className="text-gray-400">1000₽/час обслуживания</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800/50 border-primary/20 hover:border-primary/40 transition-all animate-scale-in">
              <CardContent className="p-6 text-center">
                <Icon name="Shield" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="font-montserrat font-semibold text-lg mb-2">Гарантия чистоты</h3>
                <p className="text-gray-400">Обработка после каждой аренды</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Hookah Sets */}
      <section id="sets" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-center mb-12">
            💨 <span className="text-primary">Наши кальянные</span> наборы
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Минимальный */}
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-primary/50 transition-all animate-fade-in">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="font-montserrat text-xl">Минимальный</CardTitle>
                  <Badge variant="secondary" className="bg-gray-700 text-white">Базовый</Badge>
                </div>
                <CardDescription className="text-gray-400">
                  Идеально для небольшой компании
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-montserrat font-bold text-primary mb-1">300₽/час</div>
                    <div className="text-lg text-gray-400">900₽/сутки</div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-green-500" />
                      <span className="text-sm">Кальян, чаша, калауд</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-green-500" />
                      <span className="text-sm">Щипцы, 5 мундштуков</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-700/50 rounded-lg p-3">
                    <div className="text-sm text-gray-300">🔹 Залог: 3000₽ или паспорт</div>
                  </div>
                  
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Выбрать набор
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Стандартный */}
            <Card className="bg-gradient-to-br from-primary/20 to-orange-900/20 border-primary hover:border-primary transition-all animate-fade-in relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white">
                Популярный
              </Badge>
              <CardHeader className="pt-8">
                <div className="flex justify-between items-start">
                  <CardTitle className="font-montserrat text-xl">Стандартный</CardTitle>
                  <Badge variant="secondary" className="bg-primary/20 text-primary border-primary">Оптимальный</Badge>
                </div>
                <CardDescription className="text-gray-300">
                  Оптимальный выбор для вечеринки
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-montserrat font-bold text-primary mb-1">450₽/час</div>
                    <div className="text-lg text-gray-300">1200₽/сутки</div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-green-500" />
                      <span className="text-sm">Кальян, чаша, калауд</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-green-500" />
                      <span className="text-sm">Щипцы, 10 мундштуков</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-green-500" />
                      <span className="text-sm">Сетка, колпак, горелка/плита</span>
                    </div>
                  </div>
                  
                  <div className="bg-primary/10 rounded-lg p-3">
                    <div className="text-sm text-gray-200">🔹 Залог: 5000₽ или паспорт</div>
                  </div>
                  
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Выбрать набор
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Премиум */}
            <Card className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border-yellow-600 hover:border-yellow-500 transition-all animate-fade-in">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="font-montserrat text-xl">Премиум</CardTitle>
                  <Badge className="bg-yellow-600 text-black">VIP</Badge>
                </div>
                <CardDescription className="text-gray-300">
                  Максимальный комфорт и качество
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-montserrat font-bold text-yellow-500 mb-1">1400₽/сутки</div>
                    <div className="text-sm text-gray-400">Только посуточно</div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-green-500" />
                      <span className="text-sm">Премиум-кальян, 2 чаши</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-green-500" />
                      <span className="text-sm">Калауд, щипцы, 10 мундштуков</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-green-500" />
                      <span className="text-sm">Сетка, колпак, горелка/плита</span>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-600/10 rounded-lg p-3">
                    <div className="text-sm text-gray-200">🔹 Залог: 8000₽ (только деньги)</div>
                  </div>
                  
                  <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-black font-semibold">
                    Выбрать набор
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section id="delivery" className="py-20 px-4 bg-gradient-to-r from-secondary to-gray-900">
        <div className="container mx-auto">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-center mb-12">
            🚗 <span className="text-primary">Доставка</span> по Калуге
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="bg-gray-800/50 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="font-montserrat font-semibold text-xl mb-4 text-primary">Стоимость доставки</h3>
                  <div className="text-2xl font-bold mb-2">От 200₽</div>
                  <p className="text-gray-400">Точная цена зависит от района</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-800/50 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="font-montserrat font-semibold text-xl mb-4 text-primary">Время работы</h3>
                  <div className="text-lg font-semibold mb-2">Ежедневно с 10:00 до 20:00</div>
                  <p className="text-gray-400">📍 Путейская 23</p>
                </CardContent>
              </Card>
              
              <div className="bg-primary/10 rounded-lg p-6">
                <h4 className="font-montserrat font-semibold text-lg mb-3">📌 Доставляем для:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Вечеринок и дней рождения</li>
                  <li>• Романтических свиданий</li>
                  <li>• Корпоративных мероприятий</li>
                  <li>• Просто отдыха с друзьями</li>
                </ul>
              </div>
            </div>
            
            <div className="animate-float">
              <img 
                src="/img/842e21e2-b5dc-4bf6-bfe8-3173eb63ab3b.jpg" 
                alt="Кальянные наборы" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-center mb-12">
            📲 <span className="text-primary">Быстрое</span> бронирование
          </h2>
          
          <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-primary/20">
            <CardHeader>
              <CardTitle className="text-center text-xl">Оформить заказ</CardTitle>
              <CardDescription className="text-center">
                Заполните форму и мы свяжемся с вами для подтверждения
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Ваше имя *</Label>
                  <Input id="name" placeholder="Введите имя" className="bg-gray-700 border-gray-600" />
                </div>
                <div>
                  <Label htmlFor="phone">Телефон *</Label>
                  <Input id="phone" placeholder="+7 (___) ___-__-__" className="bg-gray-700 border-gray-600" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="set">Выберите набор *</Label>
                  <Select>
                    <SelectTrigger className="bg-gray-700 border-gray-600">
                      <SelectValue placeholder="Выберите набор" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="minimal">Минимальный (300₽/час)</SelectItem>
                      <SelectItem value="standard">Стандартный (450₽/час)</SelectItem>
                      <SelectItem value="premium">Премиум (1400₽/сутки)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="duration">Срок аренды *</Label>
                  <Select>
                    <SelectTrigger className="bg-gray-700 border-gray-600">
                      <SelectValue placeholder="Выберите срок" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2h">2 часа</SelectItem>
                      <SelectItem value="4h">4 часа</SelectItem>
                      <SelectItem value="6h">6 часов</SelectItem>
                      <SelectItem value="1d">Сутки</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <Label htmlFor="address">Адрес доставки *</Label>
                <Input id="address" placeholder="Укажите адрес в Калуге" className="bg-gray-700 border-gray-600" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="date">Дата *</Label>
                  <Input id="date" type="date" className="bg-gray-700 border-gray-600" />
                </div>
                <div>
                  <Label htmlFor="time">Время доставки *</Label>
                  <Input id="time" type="time" className="bg-gray-700 border-gray-600" />
                </div>
              </div>
              
              <div>
                <Label htmlFor="master">Нужен мастер? (+1000₽/час)</Label>
                <Select>
                  <SelectTrigger className="bg-gray-700 border-gray-600">
                    <SelectValue placeholder="Выберите опцию" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="no">Нет, справимся сами</SelectItem>
                    <SelectItem value="yes">Да, нужен мастер</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="comment">Комментарий к заказу</Label>
                <Textarea 
                  id="comment" 
                  placeholder="Дополнительные пожелания или вопросы"
                  className="bg-gray-700 border-gray-600"
                />
              </div>
              
              <Button className="w-full bg-primary hover:bg-primary/90 text-lg py-3">
                📞 Отправить заявку
              </Button>
              
              <div className="text-center text-sm text-gray-400">
                После отправки мы позвоним вам для подтверждения<br />
                📱 WhatsApp/Telegram: <span className="text-primary">8 (995) 328-71-52</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 px-4 bg-gradient-to-r from-gray-900 to-secondary">
        <div className="container mx-auto">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-center mb-12">
            📸 <span className="text-primary">Галерея</span> наших кальянов
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden bg-gray-800/50 border-primary/20 hover:border-primary/40 transition-all group">
              <div className="relative overflow-hidden">
                <img 
                  src="/img/5d2b17ef-fac1-4bb1-8dae-5f6cfc52fb4c.jpg" 
                  alt="Премиум кальян"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold">Премиум кальяны</h3>
                <p className="text-sm text-gray-400">Высококачественные кальяны с элегантным дизайном</p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden bg-gray-800/50 border-primary/20 hover:border-primary/40 transition-all group">
              <div className="relative overflow-hidden">
                <img 
                  src="/img/842e21e2-b5dc-4bf6-bfe8-3173eb63ab3b.jpg" 
                  alt="Наборы для аренды"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold">Полные наборы</h3>
                <p className="text-sm text-gray-400">Всё необходимое для идеального кальянного вечера</p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden bg-gray-800/50 border-primary/20 hover:border-primary/40 transition-all group">
              <div className="relative overflow-hidden">
                <img 
                  src="/img/dcc3ac0a-7e30-406c-9bbe-bbb17cc3b396.jpg" 
                  alt="Дымные эффекты"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold">Качественный дым</h3>
                <p className="text-sm text-gray-400">Густой ароматный дым для максимального удовольствия</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-center mb-12">
            📞 <span className="text-primary">Контакты</span> и связь
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gray-800/50 border-primary/20 text-center">
              <CardContent className="p-6">
                <Icon name="Phone" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="font-montserrat font-semibold text-lg mb-2">Телефон</h3>
                <div className="text-lg font-semibold text-primary">8 (995) 328-71-52</div>
                <p className="text-sm text-gray-400 mt-2">WhatsApp / Telegram</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800/50 border-primary/20 text-center">
              <CardContent className="p-6">
                <Icon name="MapPin" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="font-montserrat font-semibold text-lg mb-2">Адрес</h3>
                <div className="text-lg">Путейская 23</div>
                <p className="text-sm text-gray-400 mt-2">г. Калуга</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800/50 border-primary/20 text-center">
              <CardContent className="p-6">
                <Icon name="Clock" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="font-montserrat font-semibold text-lg mb-2">Режим работы</h3>
                <div className="text-lg">10:00 - 20:00</div>
                <p className="text-sm text-gray-400 mt-2">Ежедневно</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <h3 className="font-montserrat font-semibold text-xl mb-4">
              💬 Остались вопросы? Пишите – поможем с выбором! 😊
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                💬 WhatsApp
              </Button>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                ✈️ Telegram
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary py-8 px-4 border-t border-primary/20">
        <div className="container mx-auto text-center">
          <div className="font-montserrat font-bold text-xl mb-4">
            🔥 <span className="text-primary">Smokk</span> Lab
          </div>
          <p className="text-gray-400 mb-4">
            Аренда кальянов в Калуге • Качество • Комфорт • Доступные цены
          </p>
          <div className="text-sm text-gray-500">
            © 2024 Smokk Lab. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  )
}