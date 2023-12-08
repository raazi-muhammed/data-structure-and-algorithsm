const { Trie } = require("./trie");

describe("Trie Test", () => {
    test("Insert and contains", () => {
        const tri = new Trie();

        tri.insert("raazi");
        tri.insert("rahul");

        expect(tri.contains("raazi")).toBe(true);
        expect(tri.contains("rahul")).toBe(true);

        expect(tri.contains("razi")).toBe(false);
        expect(tri.contains("rahhul")).toBe(false);
        expect(tri.contains("ra")).toBe(false);
        expect(tri.contains("r")).toBe(false);
    });

    test("Has prefix", () => {
        const tri = new Trie();

        tri.insert("raazi");
        tri.insert("rahul");

        expect(tri.hasPrefix("raazi")).toBe(true);
        expect(tri.hasPrefix("ra")).toBe(true);
        expect(tri.hasPrefix("r")).toBe(true);

        expect(tri.hasPrefix("razi")).toBe(false);
        expect(tri.hasPrefix("raj")).toBe(false);
        expect(tri.hasPrefix("j")).toBe(false);
    });
    test("Has exact word", () => {
        const tri = new Trie();

        tri.insert("raazi");
        tri.insert("rahul");

        expect(tri.hasExactWord("raazi")).toBe(true);
        expect(tri.hasExactWord("raaz")).toBe(false);
        expect(tri.hasExactWord("rahu")).toBe(false);
        expect(tri.hasExactWord("rahull")).toBe(false);
        expect(tri.hasExactWord("rahul")).toBe(true);
    });
    test("Get words starting with", () => {
        const tri = new Trie();

        tri.insert("raazi");
        tri.insert("rahul");

        //expect(tri.withPrefix("raazi")).toEqual(["raazi"]);
        expect(tri.withPrefix("ra")).toEqual(true);
        expect(tri.withPrefix("r")).toEqual(true);

        expect(tri.withPrefix("razi")).toEqual(false);
        expect(tri.withPrefix("raj")).toEqual(false);
        expect(tri.withPrefix("j")).toEqual(false);
    });
});
