using System;
using System.Collections.Generic;

namespace CMD_4
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Dictionary<int, string> dictionary = new Dictionary<int, string>();
            String input = "";
            int itemId = 0;
            while(true)
            {
                Console.ForegroundColor = ConsoleColor.Green;
                Console.Write("$");
                Console.ResetColor();
                input = Console.ReadLine().Trim().ToLower();
                if(input.StartsWith("add:"))
                {
                    dictionary.Add(dictionary.Count, input.Substring(4));
                    itemId = dictionary.Count;
                }
                else if(input.StartsWith("back"))
                {
                    if(dictionary.Count == 0) continue;
                    if(itemId < 1) itemId = 1;
                    Console.WriteLine(dictionary[--itemId]);
                }
                else if(input.StartsWith("forward"))
                {
                    if (dictionary.Count == 0) continue;
                    if (itemId > dictionary.Count-2) itemId = dictionary.Count-2;
                    Console.WriteLine(dictionary[++itemId]);
                }
                else if(input.StartsWith("exit"))
                {
                    break;
                }
                else if(input.StartsWith("clear"))
                {
                    Console.Clear();
                }
                else if(input.StartsWith("help"))
                {
                    Console.WriteLine("add: <text> Add a new item to the list");
                    Console.WriteLine("back        Go back to the previous item");
                    Console.WriteLine("forward     Go forward to the next item");
                    Console.WriteLine("clear       Clear the console");
                    Console.WriteLine("exit        Exit the program");
                }
                else if(input != "") //Catches unknown commands that are not just empty
                {
                    Console.ForegroundColor = ConsoleColor.Red;
                    Console.WriteLine($"Unknown command: '{input}', type 'help' to get list of avalible commands");
                }
            }
        }
    }
}

