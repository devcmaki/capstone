import axios from "axios";

export const LANGUAGE_VERSIONS = {
  javascript: "18.15.0",
  python: "3.10.0",
  java: "15.0.2",
  csharp: "6.12.0",
  cpp: "10.2.0",
  php: "8.2.3",
};

export const CODE_SNIPPETS = {
  javascript: `console.log('Hello, Ka-BuClode!');`,
  python: `print('Hello, Ka-BuClode!')`,
  java: `public class HelloWorld {
    public static void main(String[] args) {
      System.out.println("Hello, Ka-BuClode!");
    }
  }`,
  cpp: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello, Ka-BuClode!" << endl;
    return 0;
}`,
  csharp: `using System;

class Program {
    static void Main() {
        Console.WriteLine("Hello, Ka-BuClode!");
    }
}`,
  css: `body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

h1 {
    color: #333;
}`,
  html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello, Ka-BuClode!</title>
</head>
<body>
    <h1>Hello, Ka-BuClode!</h1>
</body>
</html>`,
  json: `{
    "message": "Hello, Ka-BuClode!"
  }`,
  php: `<?php
echo "Hello, Ka-BuClode!";
?>`,
  sql: `SELECT 'Hello, Ka-BuClode!' AS message;`,
  xml: `<?xml version="1.0" encoding="UTF-8"?>
<greeting>
  <message>Hello, Ka-BuClode!</message>
</greeting>`
};

const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",  // Piston API base URL
});

export const executeCode = async (language, sourceCode) => {
  try {
    // Make a POST request to the Piston API with the required parameters
    const response = await API.post("/execute", {
      language: language,
      version: LANGUAGE_VERSIONS[language],  // Language version from a predefined map
      files: [
        {
          content: sourceCode,  // The actual code to execute
        }
      ],

    });

    // Return the result from the API
    return response.data;
  } catch (error) {
    // Handle errors (log or display) and return appropriate error message
    console.error("Error executing code:", error);
    return { error: "Failed to execute code." };
  }
};