class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }

    return total % this.size;
  }

  set(key, val) {
    let indx = this.hash(key);

    let bucket = this.table[indx];
    if (!bucket) {
      this.table[indx] = [[key, val]];
    } else {
      let keyExist = bucket.find((item) => item[0] === key);
      if (keyExist) {
        keyExist[1] = val;
      } else {
        this.table[indx].push([key, val]);
      }
    }
  }

  get(key) {
    let data = this.table[this.hash(key)];
    if (data) {
      let item = data.find((item) => item[0] == key);
      if (item) {
        return item[1];
      } else {
        return undefined;
      }
    } else {
      return undefined;
    }
  }

  remove(key) {
    let index = this.hash(key);
    let bucket = this.table[index];
    if (bucket) {
      let itemItem = this.table[index].findIndex((item) => item[0] === key);
      if (itemItem != -1) {
        this.table[index].splice(itemItem, 1);
      } else {
        return -1;
      }
    } else {
      return -1;
    }
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

const table = new HashTable(50);

table.set("name", "Bruce");
table.set("mane", "Bruce2");

table.set("age", 35);
table.remove("mane");
table.display();
