# 1. Adım: Nginx tabanlı imaj kullan
FROM nginx:alpine

# 2. Adım: Proje dosyalarını Nginx'in sunacağı dizine kopyala
COPY . /usr/share/nginx/html

# 3. Adım: 80 portunu aç
EXPOSE 80

# 4. Adım: Nginx'i foreground modda çalıştır (default zaten öyle)
CMD ["nginx", "-g", "daemon off;"]
