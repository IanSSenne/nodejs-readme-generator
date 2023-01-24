class MDDocument {
	constructor() {
		this.document = [];
	}
	

	static bold(content) {
		return "**" + content + "**";
	}

	badge(label, message, color, params = {}) {
		let url = new URLSearchParams({
			label,message,color,...params
		})
		this.document.push(`![${label} - ${message}](https://img.shields.io/static/v1?${url.toString()})`);
	}
	header(content, size = 1) {
		this.document.push("#".repeat(size) + " " + content);
	}
	p(content) {
		this.document.push(String(content));
	}
	link(content,href) {
		this.document.push(`[${content}](${href})`);
	}
  static link( content,href) {
    return `[${content}](${href})`;
  }
	imgLink(content,href) {
		this.document.push(`![${content}](${href})`);
	}
	code(content, language = "") {
		this.document.push("```" + language);
		this.document.push(content);
		this.document.push("```");
	}
	static inlineCode(content) {
		return "`" + content + "`";
  }
  list(items) {
    this.document.push(items.map(item => "- " + item).join("\n"));
  }
  table(headers, rows) {
    this.document.push(headers.join(" | "));
    this.document.push(headers.map(() => "---").join(" | "));
    this.document.push(...rows.map(row => row.join(" | ")));
  }
  toString() {
    return this.document.join("\n\n");
  }
}

module.exports = MDDocument;