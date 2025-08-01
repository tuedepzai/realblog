# Các bước để làm đệ quy bằng một cách đơn giản
## Vì sao đệ quy lại khó?
Đệ quy khó là do bạn đã làm khó nó, là do bạn muốn biết đệ quy dang làm gì một cách chi tiết bằng cách phân tích nó chạy như thế nào, đối với những với đệ quy không "sâu" thì việc phân tích nó thì dễ dàng, nhưng đối với bài phức tạp thì việc này thật khó, bạn cố viết hay lập recursion tree và cuối cùng kết quả là bạn lại đau đầu về nó

## Vậy cách để giải quyết như thế nào
Cách để giải quyết thì rất dễ, **bạn sẽ tự nhận rằng cái function của đã hoạt động cho một dữ liệu nhỏ hơn.** Ví dụ như là ta có function $f(x)$ để tính số cách xếp viên gạch khi có x viên gạch chẳng hạn, bạn tự suy tính nó là "f(8) của mình sẽ hoạt động". **Sau các bước đó xong, bạn hay viết hàm đề quy, giúp nó sẽ hoạt động cho những cái data lớn hơn kiểu như $f(9), f(10), f(11)$**. Và sau đó chỉ cần **giải quyết việc khi dữ liệu là số nhỏ nhất có thể (base case)** là các bạn thành công!.


# Một số ví dụ
**Toà tháp hà nội**
Cho 3 cột dạng hình tháp lần lượt được gọi là $A,B,C$. Sao cho cột $A$ là chứa $n$ chiếc đĩa. Đếm số cách nhỏ nhất để chuyển $n$ chiếc đĩa này sang cột thứ $C$. Cho biết các địa lớn hơn không thể chồng lên đĩa nhỏ hơn.

![image](https://hackmd.io/_uploads/HygLHEVH0.png)


đây là một bài toán rất kinh điển, được sử dụng trong thuật toán để giúp các bạn hiểu về đệ quy.

## Vậy làm thế nào để giải bài toán này ? 
Giả sử bạn sẽ giải với 8 chiếc đĩa, theo cách mà tôi đã kể trên thì bạn hay giả sử đã có cách để giải cho 7 chiếc địa lên cột $C$ vậy bạn chỉ cần cho xếp chiếc đĩa thứ 8 lên đúng không ? **NHƯNG KHOAN ĐÃ** chiếc đĩa thứ 8 không thể xắp lên chiếc đĩa thứ 7 vì nó là chiếc đĩa lớn nhất (theo hình). Vậy bạn cần chuyển 7 chiếc đĩa kia sang cột $B$ và chuyển chiếc đĩa thứ 8 sang cột $C$ rồi chuyển đĩa thứ 7 sang cột $C$ là được. 

Vậy tóm tắt như sau:
* Bạn chuyển 7 đĩa từ cột $A$ sang cột $B$
* Chuyển đĩa thứ 8 từ cột $A$ sang cột $C$
* Chuyển lại 7 đĩa từ cột $B$ sang cột $C$

Nhưng làm sao để chuyển 7 địa sang cột $B$ tất nhiên là sử dụng cột thứ $C$ điều này hiển nhiên vì cột thứ C đang trống. qua đó ta sẽ viết lại các bước như sau: 

* Bạn chuyển 7 đĩa từ cột $A$ sang cột $B$ bằng cột $C$
* Chuyển đĩa thứ 8 từ cột $A$ sang cột $C$ 
* Chuyển lại 7 đĩa từ cột $B$ sang cột $C$ bằng cọt $A$ (cột $A$ đang trống)

vậy ta sẽ có cách tổng quát như sau với $n$ đĩa:
* Bạn chuyển n - 1 đĩa từ cột $A$ sang cột $B$ bằng cột $C$
* Chuyển đĩa thứ n từ cột $A$ sang cột $C$ 
* Chuyển lại n - 1 đĩa từ cột $B$ sang cột $C$ bằng cọt $A$ (cột $A$ đang trống)

với base case:
* Ta chuyển 0 đĩa sang cột C điều này chẳng có làm được gì vì vậy ta **return**

và đây là cách thuật toán hoạt động
![image](https://hackmd.io/_uploads/HJINd4VHC.png)



bạn thấy rằng những vấn đề lớn đang được giải quyết bằng những vấn đề nhỏ hơn




# Nguồn:
[Chaddaï Fouché](https://qr.ae/psD1WU)



# Kết:
Cảm ơn vì đã xem bài viết của tôi! Happy Coding!
