<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="wrapper_leave">
      <dt>全部分类</dt>
      <dd v-for="(item, idx) in menu" :key="idx" @mouseenter="list_enter">
        <i :class="item.type">{{ item.name }}</i>
        <span class="arrow" />
      </dd>
    </dl>
    <div
      class="detail"
      v-if="kind"
      @mouseenter="item_enter"
      @mouseleave="item_leave"
    >
      <div v-for="(item, idx) in curdetail.child" :key="idx">
        <h4>{{ item.title }}</h4>
        <span v-for="v in item.child" :key="v">{{ v }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kind: "",
      menu: [
        {
          type: "food",
          name: "美食",
          child: [
            {
              title: "美食",
              child: ["代金券", "甜点饮品", "火锅", "自助餐", "小吃快餐"],
            },
          ],
        },
        {
          type: "takeout",
          name: "外卖",
          child: [
            {
              title: "外卖",
              child: ["美团外卖"],
            },
          ],
        },
        {
          type: "hotel",
          name: "酒店",
          child: [
            {
              title: "酒店",
              child: ["经济", "舒适/三星", "高档", "豪华"],
            },
          ],
        },
      ],
    };
  },
  computed: {
    curdetail: function () {
      return this.menu.filter((item) => item.type === this.kind)[0];
    },
  },
  methods: {
    wrapper_leave: function () {
      this._timer = setTimeout(() => {
        this.kind = "";
      }, 100);
    },
    list_enter: function (e) {
      this.kind = e.target.querySelector("i").className;
    },
    item_enter: function () {
      clearTimeout(this._timer);
    },
    item_leave: function () {
      this.kind = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.page-index {
  .m-menu {
    width: 230px;
    height: 475px;
    box-sizing: border-box;
    margin-top: -50px;
    margin-left: 20px;
    color: #fff;
    position: relative;
    background: linear-gradient(
      -180deg,
      rgba(2, 181, 157, 0.85) 2%,
      rgba(22, 146, 183, 0.85) 100%
    );

    dt {
      height: 50px;
      padding-top: 15px;
      box-sizing: border-box;
      font-size: 16px;
      font-weight: 400;
      margin-left: 15px;
    }

    dd {
      position: relative;
      box-sizing: border-box;
      padding: 2px 12px;
      height: 26px;
      cursor: pointer;

      &:hover {
        background: rgba(255, 255, 255, 0.2);

        & > i {
          opacity: 1;
        }
      }
    }

    .nav {
      dd > i {
        font-family: "meituan";
        font-size: 14px;
        font-style: normal;
        opacity: 0.3;
        margin-right: 11px;

        &:before {
          width: 14px;
          height: 14px;
          display: inline-block;
        }
      }

      .food {
        &:before {
          content: "\e622";
        }
      }

      .takeout {
        &:before {
          content: "\e630";
        }
      }

      .hotel {
        &:before {
          content: "\e62a";
        }
      }

      .homestay {
        &:before {
          content: "\e631";
        }
      }

      .movie {
        &:before {
          content: "\e62c";
          position: relative;
          left: -2px;
        }
      }

      .airport {
        &:before {
          content: "\e632";
        }
      }

      .ktv {
        &:before {
          content: "\e627";
        }
      }

      .life {
        &:before {
          content: "\e633";
        }
      }

      .hair {
        &:before {
          content: "\e626";
          transform: scale(0.7);
        }
      }

      .marry {
        &:before {
          content: "\e629";
        }
      }

      .offspring {
        &:before {
          content: "\e623";
        }
      }

      .sport {
        &:before {
          content: "\e62b";
        }
      }

      .furniture {
        &:before {
          content: "\e625";
        }
      }

      .study {
        &:before {
          content: "\e624";
        }
      }

      .health {
        &:before {
          content: "\e628";
        }
      }

      .bar {
        &:before {
          content: "\e621";
        }
      }

      .arrow {
        width: 4px;
        height: 4px;
        border-bottom: 1px solid #fff;
        border-right: 1px solid #fff;
        transform: rotate(-45deg);
        display: block;
        position: absolute;
        right: 13px;
        top: 0;
        bottom: 0;
        margin: auto;
      }
    }

    .detail {
      padding: 0 30px;
      position: absolute;
      left: 230px;
      bottom: 0;
      width: 400px;
      height: 416px;
      background: #fff;
      z-index: 9999;

      h4 {
        margin-top: 24px;
        height: 22px;
        line-height: 22px;
        padding-bottom: 10px;
        border-bottom: 1px solid #e5e5e5;
      }

      span {
        color: #999;
        font-size: 12px;
        line-height: 15px;
        display: inline-block;
        margin-right: 16px;
        margin-top: 10px;
        cursor: pointer;

        &:hover {
          color: #31bbac;
        }
      }
    }
  }
  .slide {
    height: 240px;
    margin: 10px;

    img {
      height: 240px;
    }
  }
}
</style>
