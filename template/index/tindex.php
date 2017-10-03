<?php
echo <<<HTML
<div class="page with-nav-top with-nav-bottom" id="login">
  <nav class="nav affix dock-top justify-center">
    <a>首页</a>
    <a href="https://allenby.bid/">博客</a>
    <a href="/?action=about">关于</a>
  </nav>
  <div id="login" class="column fluid-v no-margin flex-nowrap">
    <div class="cell gray" id="loginLogo">
      <div class="tile flex-center flex flex-column article">
        <img src="images/app_logo.png" alt="{$main['sitename']}">
      </div>
    </div>
    <div class="cell box">
      <div class="tile flex-center flex flex-column">
        <form method="post">
          <div class="control box danger form-message hide-empty" style="display: none;"></div>
          <div class="control has-label-left fluid">
            <input autofocus="" id="account" name="account" type="text" class="input" placeholder="请输入成员名或Email">
            <label for="account" title="用户名"><i class="icon icon-user"></i></label>
            <p class="help-text"></p>
          </div>
          <div class="control has-label-left fluid">
            <input id="password" name="password" type="password" class="input" placeholder="密码">
            <label for="password" title="密码"><i class="icon icon-lock"></i></label>
            <p class="help-text"></p>
          </div>
          <div class="control">
            <button type="submit" class="btn primary fluid">登录</button>
          </div>
          <div class="control">
            <div class="checkbox">
              <input type="checkbox" name="keepLogin" value="on">
              <label for="keepLogin">保持登录</label>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
HTML;
?>