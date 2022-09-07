# ExpressStarterKit

Express.js Asp.Net Core 6.0 MVC Tarzında Starter Kit.

## Nasıl Çalıştırırım?

```
$ npm run start
```

## Bilgilendirme

### Kurulumlar

Tüm paketleri kurmak için
```
$ npm install
```
Komutunu kullanabilirsiniz.

### Npm Kullanımı

#### Yeni bir proje oluşturma
```
$ npm init
```
Komutunu kullanabilirsiniz. Size birkaç soru soracaktır. Verdiğiniz bilgilere göre projeniz oluşturulacaktır.

#### Paket indirme ve ekleme
```
$ npm install paketismi
```
Komutunu kullanarak herhangi bir npm paketini projenize dahil edebilirsiniz.

### Express bilgileri

Proje Asp.Net Core 6.0 Temalı bir şekilde tasarlanmıştır. 

Projenin main kodları ``Program.js`` dosyası içerisinde bulunmaktadır.

Projede bulunan Routerlar (Controller) ``/Controllers`` Klasöründe bulunmaktadır.
Router isimlerinde "Controller" bulunmasının sebebi projenin asp.net temasında olmasıdır. Express üzerinde router isimlendirmeleri için bir zorunluluk yoktur.

Eklediğimiz routerlar ``Program.js`` dosyası içerisinde projeye dahil edilmilştir.

Örnek amaçlı kullanılan veriler ``database.json`` içerisinde __rastgele__ bir şekilde oluşturulmuştur.