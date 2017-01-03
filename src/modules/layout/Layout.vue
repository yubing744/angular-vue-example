<style>
html, body{
    padding: 0;
    margin: 0;
}

.header, .footer {
    height: 60px;
    background: red;
    overflow: hidden;
}

.container {
    margin-left: 300px;
    background: grey;
    position: relative;
    _zoom: 1;
}

.container .sidebar {
    display: block;
    float: left;
    height: 400px;
    width: 300px;
    background: blue;
    margin-left: -300px;
    position: relative;
}

.container .main {
    display: block;
    height: 400px;
    width: 100%;
}
</style>

<template id="layout">
    <div>
        <div class="header">
             <slot name="header"></slot>
        </div>
        <div class="container">
            <div class="sidebar">
                 <slot name="sidebar"></slot>
            </div>
            <div class="main">
                <slot name="main"></slot>
            </div>
        </div>
        <div class="footer">
             <slot name="footer"></slot>
        </div>
    </div>
</template>

<script type="text/javascript">
    module.exports = {};
</script>
