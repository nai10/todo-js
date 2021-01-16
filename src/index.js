import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了のリストを作成する
const createIncompleteList = (text) => {
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = text;

  // button(完了)タグ
  const complete_button = document.createElement("button");
  complete_button.innerText = "完了";
  complete_button.addEventListener("click", () => {
    // 押された削除ボタンの親タグdivを削除する。
    deleteFromIncompleteList(complete_button.parentNode);

    // TODOテキスト取得
    const addTarget = complete_button.parentNode;
    const text = addTarget.firstElementChild.innerText;

    // div以下を初期化
    addTarget.textContent = null;

    // liタグ生成
    const li = document.createElement("li");
    li.innerText = text;

    // button(戻す)
    const backButtion = document.createElement("button");
    backButtion.innerText = "戻す";
    backButtion.addEventListener("click", () => {
      // 押された戻るボタンの親タグを完了リストから削除
      const deleteTarget = backButtion.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      // テキストを取得
      const text = backButtion.parentNode.firstElementChild.innerText;
      // 追加
      createIncompleteList(text);
    });

    // divの子要素の追加
    addTarget.appendChild(li);
    addTarget.appendChild(backButtion);

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // button(削除)タグ
  const delete_button = document.createElement("button");
  delete_button.innerText = "削除";
  delete_button.addEventListener("click", () => {
    // 押された削除ボタンの親タグdivを削除する。
    deleteFromIncompleteList(delete_button.parentNode);
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
