using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CMD_1
{
    class Program
    {
        static void Main(string[] args)
        {
            while(true)
            {
                double num1, num2;
                char operation;
                try
                {
                    Console.Write("Insert a number: ");
                    num1 = double.Parse(Console.ReadLine());
                    Console.Write("Select an operation: ");
                    operation = char.Parse(Console.ReadLine());
                    Console.Write("Insert a number: ");
                    num2 = double.Parse(Console.ReadLine());

                    Console.Write("Result: ");
                    if (operation == '+') Console.WriteLine(num1 + num2);
                    else if (operation == '-') Console.WriteLine(num1 - num2);
                    else if (operation == '*') Console.WriteLine(num1 * num2);
                    else if (operation == '/') Console.WriteLine(num1 / num2);

                    string exit;
                    do
                    {
                        Console.Write("Exit? [y/N]? ");
                        exit = Console.ReadLine().ToUpper();
                    }
                    while (exit != "Y" && exit != "N" && exit != "");
                    
                    if (exit == "Y") break;
                    else Console.Clear();
                }
                catch
                {
                    Console.WriteLine("Error: invalid input");
                }
            }
        }
    }
}
