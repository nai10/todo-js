import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;

  // button(完了)タグ
  const complete_button = document.createElement("button");
  complete_button.innerText = "完了";
  complete_button.addEventListener("click", () => {
    alert("完了");
  });

  // button(削除)タグ
  const delete_button = document.createElement("button");
  delete_button.innerText = "削除";
  delete_button.addEventListener("click", () => {
    alert("削除");
  });

  // divへのli追加
  div.appendChild(li);
  div.appendChild(complete_button);
  div.appendChild(delete_button);

  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
