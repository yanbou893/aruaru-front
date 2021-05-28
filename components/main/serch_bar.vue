<template>
    <div class="serch_box" style="text-align: left">
        <div class="serch_item">
        <p>アプリ名</p>
        <input type="text" style="width:100%">
        <p>作成者</p>
        <input type="text" style="width:100%">
        <p>カテゴリ</p>
        <select name="pref">
            <option value="Tokyo">東京</option>
        </select>
        <p>ビジネスモデル</p>
        <select name="pref">
            <option value="Tokyo">広告モデル</option>
            <option value="Tokyo">課金モデル</option>
            <option value="Tokyo">ECモデル</option>
            <option value="Tokyo">仲介モデル</option>
        </select>
        <p>プラットフォーム</p>
        <select name="pref">
            <option value="Tokyo">iOS</option>
            <option value="Tokyo">Android</option>
            <option value="Tokyo">Desktop</option>
            <option value="Tokyo">Web</option>
        </select>
        <button>検索</button>
        </div>
    </div>
</template>
<style>
    .serch_box{
  margin-left: auto;
  margin-right: auto;
        
        width:30%;
        padding-left:5%;
        padding-right:5%;
        border:solid 1px black;
    }
    .serch_item{
        padding-top:10px;
        padding-bottom:10px;
    }
    
@media (max-width: 480px) {
    .serch_box{
        margin-left: auto;
        margin-right: auto;
        
        width:80%;
        border:solid 1px black;
    }
}
</style>