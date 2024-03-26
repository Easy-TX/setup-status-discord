

# setup-status-discord
Tại file `index.js`, hãy nhập `user_id` của bạn vào ô này
# Lấy id của bản thân
` Cài đặt ` -> ` Nâng Cao ` -> bật ` chế độ nhà phát triển ` 
Sau đó chuyển về click chuột phải vào user của mình 
![image](https://github.com/KamisatoMe/setup-status-discord/assets/111936201/5b6535d7-2bf4-4745-b57b-3b8d15468de3)

chọn ` sao chép id người dùng ` là bạn đã có cho mình id bản thân

# Lấy id ứng dụng nhập cho `application_id`

truy cập https://discord.com/developers/applications -> tạo ứng dụng `New Application` Nhập tên ứng dụng -> nhấp `CREATE` 
sau khi tạo xong ứng dụng cho riêng mình sẽ có menu cho ứng dụng như này

![image](https://github.com/KamisatoMe/setup-status-discord/assets/111936201/d137dfc6-097b-49b9-b7ee-26b64c762507)

click menu `General Information` kéo xuống dưới như ảnh dưới thì coppy dán vào code nhé!

![image](https://github.com/KamisatoMe/setup-status-discord/assets/111936201/81b57800-ee9b-4652-be67-e0e4dbdc8d02)

# lấy token access_token (token này để truy cập thông tin các kiểu thôi không phải token đăng nhập bot)

Truy cập MENU -> `OAuth2` => tại ô `Redirects` nhấn `Add Another` -> nhập `http://localhost:3000/` này vô cái này k quan trọng nma cứ nhập cho có rồi `save changes` lại nha

Tiếp tục tại menu này tại ô `OAuth2 URL Generator` 

![image](https://github.com/KamisatoMe/setup-status-discord/assets/111936201/79f3a211-49fc-4754-ac3b-313d8d855bd9)

Chọn 2 ô như ảnh -> Tại `SELECT REDIRECT URL` -> chọn đến cái `http://localhost:3000/` vừa nãy 
![image](https://github.com/KamisatoMe/setup-status-discord/assets/111936201/8408c3fc-26e3-421e-b9a4-90828fe4ca1b)

Tại phần `BOT PERMISSIONS`  -> chọn như ảnh cho nhanh gọn cái này chả có tác dụng gì đâu (có add bot vô server đâu)
![image](https://github.com/KamisatoMe/setup-status-discord/assets/111936201/9111c588-5c14-49ca-b4e8-52a60639a9a9)

Kéo xuống tại phần `GENERATED URL` dưới copy đoạn này lại rồi dán vô `access_token` trong code nha
![image](https://github.com/KamisatoMe/setup-status-discord/assets/111936201/bd06cc30-f48e-4405-8b0a-d2f1969bfb10)

# đến đoạn ảnh đại diện và emoji nhỏ cho ảnh trạng thái 
![image](https://github.com/KamisatoMe/setup-status-discord/assets/111936201/9a7213fa-8b02-448c-b3d6-41c5521f8d8b)

Như đoạn ảnh mình gửi thì 
dòng `largeImageKey` có giá trị `image` : đây là ảnh đại diện lớn của trạng thái 
dòng `smallImageKey` có giá trị `dayoi` : đây là ảnh đại diện nhỏ của trạng thái 
Setup như nào thì xem dưới nhé!
Truy Cập vào menu `Rich Presence` -> `Rich Presence Assets` -> ở đây các bạn upload ảnh muốn lên
Như ảnh phía dưới thì upload lên tên ảnh như nào thì thay vô giá trị `image`, `dayoi` là được 
![image](https://github.com/KamisatoMe/setup-status-discord/assets/111936201/098724ce-c728-4f97-86f7-a7aeaf84b8e1)
![image](https://github.com/KamisatoMe/setup-status-discord/assets/111936201/7e6c8b1e-2103-4443-a3ac-dfee70876250)


# Install and run setup status discord
Trước tiên hãy setup hết các yêu cầu bên trên mới làm theo các bước này để chạy status nhé
Mở file `install.bat` như ảnh phía dưới -> nó tự chạy đến khi tắt bảng này nên các bạn không phải lo gì nhé
![image](https://github.com/KamisatoMe/setup-status-discord/assets/111936201/3a76dde1-978a-4588-851e-3e0875962f4d)

Sau khi chạy file trên hoàn tất thì chạy file này `run.bat` nếu bật lên mà nó tự tắt luôn thì mới làm cách dưới nhé
![image](https://github.com/KamisatoMe/setup-status-discord/assets/111936201/ee83524d-bbca-4aec-be60-3522ff9c6fa7)

# đây là cách khi mở run.bat mà bảng cmd tự tắt mà ko hiện thì cứ ib mình!
Mở file `cmd.bat` chạy theo từng mục này nhé
`pm2 start index.js` -> `pm2 restart index` -> `pm2 restart index`

# VÀ THẾ LÀ ĐÃ HOÀN TẤT VIỆC SETUP STATUS








