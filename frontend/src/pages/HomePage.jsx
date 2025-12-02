import React from "react";
import { Header } from "@/components/Header";
import { AddTask } from "@/components/AddTask";
import { StatsAndFilters } from "@/components/StatsAndFilters";
import { TaskList } from "@/components/TaskList";
import { TaskListPagination } from "@/components/TaskListPagination";
import { DateTimeFilters } from "@/components/DateTimeFilters";
import { Footer } from "@/components/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen w-full relative">
      {/* Radial Gradient Background from Bottom */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 90%, #fff 40%, #7c3aed 100%)",
        }}
      />
      {/* Your Content/Components */}
      <div className="container relative z-10 pt-8 mx-auto">
        <div className="w-full max-w-2xl p-6 mx-auto space-y-6">
          <Header />
          <AddTask />
          <StatsAndFilters />
          <TaskList />
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <TaskListPagination />
            <DateTimeFilters />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
